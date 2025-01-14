import { useState, useEffect } from 'react';
import { fetchProducts, createProduct } from '../../ProductServer';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';
import styles from './CadastroProduct.module.css';
import BackToTopButton from '../ButtonBack/ButtonBack';


interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

const CadastroProduto = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    description: '',
    available: true,
  });
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      const sortedProducts = data.sort((a: Product, b: Product) => a.price - b.price);
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Erro ao carregar produtos', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct(product);
      setProduct({ name: '', price: 0, description: '', available: true });
      loadProducts(); // Atualiza a lista de produtos após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'available' ? value === 'sim' : value,
    }));
  };

  useEffect(() => {
    loadProducts();
  }, []); // Carregar produtos ao montar o componente

  return (
    <div className={styles.cadastroProduto}>
      <h2>Cadastrar Produto</h2>
      <ProductForm product={product} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Lista de Produtos</h2>
      <ProductTable products={products} />
      <BackToTopButton /> 
    </div>
  );
};

export default CadastroProduto;

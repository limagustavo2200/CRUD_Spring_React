import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './ProductForm.module.css';

interface ProductFormProps {
  product: { name: string; price: number; description: string; available: boolean };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ProductForm = ({ product, handleChange, handleSubmit }: ProductFormProps) => (
  <form className={styles.formulario} onSubmit={handleSubmit}>
    <div>
      <TextField
        label="Nome do Produto"
        variant="outlined"
        fullWidth
        name="name"
        value={product.name}
        onChange={handleChange}
        required
        sx={{
          '& .MuiInputLabel-root': {
            color: 'white', // Cor da label
          },
          '& .MuiOutlinedInput-root': {
            color: 'white', // Cor do texto no input
            '& fieldset': {
              borderColor: 'white', // Borda branca
            },
            '&:hover fieldset': {
              borderColor: 'white', // Borda branca ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Borda verde quando o campo estiver em foco
            },
            '& input': {
              color: 'white', // Garantir que o texto dentro do campo será branco
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Remover a cor azul do foco da label
            },
          },
        }}
      />
    </div>

    <div>
      <TextField
        label="Preço"
        variant="outlined"
        fullWidth
        type="number"
        name="price"
        value={product.price || ''}
        onChange={handleChange}
        required
        sx={{
          '& .MuiInputLabel-root': {
            color: 'white', // Cor da label
          },
          '& .MuiOutlinedInput-root': {
            color: 'white', // Cor do texto no input
            '& fieldset': {
              borderColor: 'white', // Borda branca
            },
            '&:hover fieldset': {
              borderColor: 'white', // Borda branca ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Borda verde quando o campo estiver em foco
            },
            '& input': {
              color: 'white', // Garantir que o texto dentro do campo será branco
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Remover a cor azul do foco da label
            },
          },
        }}
      />
    </div>

    <div>
      <TextField
        label="Descrição"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="description"
        value={product.description}
        onChange={handleChange}
        required
        sx={{
          '& .MuiInputLabel-root': {
            color: 'white', // Cor da label
          },
          '& .MuiOutlinedInput-root': {
            color: 'white', // Cor do texto no input
            '& fieldset': {
              borderColor: 'white', // Borda branca
            },
            '&:hover fieldset': {
              borderColor: 'white', // Borda branca ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Borda verde quando o campo estiver em foco
            },
            '& textarea': {
              color: 'white', // Garantir que o texto dentro do campo será branco
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Remover a cor azul do foco da label
            },
          },
        }}
      />
    </div>

    <div>
      <FormControl fullWidth required sx={{
        '& .MuiOutlinedInput-root': {
          color: 'white', // Cor do texto no campo
          '& fieldset': {
            borderColor: 'white', // Borda branca
          },
          '&:hover fieldset': {
            borderColor: 'white', // Borda branca ao passar o mouse
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green', // Borda verde quando em foco
          },
        },
      }}>
        <InputLabel sx={{ color: 'white' }}>Disponível para venda</InputLabel>
        <Select
          name="available"
          value={product.available ? 'sim' : 'não'}
          onChange={handleChange}
          sx={{
            '& .MuiSelect-icon': {
              color: 'white', // Cor do ícone de seleção (seta)
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Cor da borda do menu suspenso
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Borda do menu suspenso ao passar o mouse
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green', // Borda verde quando em foco
            },
            '& .MuiMenuItem-root': {
              color: 'black', // Cor do texto nas opções
              backgroundColor: '#333', // Cor de fundo do menu suspenso
            },
            '& .MuiMenuItem-root:hover': {
              backgroundColor: '#555', // Cor de fundo ao passar o mouse nas opções
            },
          }}
        >
          <MenuItem value="sim" >Sim</MenuItem>
          <MenuItem value="não" >Não</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar Produto
      </Button>
    </div>
  </form>
);

export default ProductForm;

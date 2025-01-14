package com.gustavo.backendcase.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductEntity create(ProductEntity product){
        return productRepository.save(product);
    }

    public List<ProductEntity> displayProduct(){
        return productRepository.findAll();
    }
}

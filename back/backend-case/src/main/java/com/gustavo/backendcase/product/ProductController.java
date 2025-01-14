package com.gustavo.backendcase.product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/ping")
    public String ping(){
        return "pong";
    }

    @PostMapping("/")
    public List<ProductEntity> registerProduct(@RequestBody ProductEntity product) {
        productService.create(product);
        System.out.println("PRODUTO CADASTRADO");
        return listProduct();
    }


    @GetMapping("/")
    public List<ProductEntity> listProduct() {
        return productService.displayProduct();
    }


}

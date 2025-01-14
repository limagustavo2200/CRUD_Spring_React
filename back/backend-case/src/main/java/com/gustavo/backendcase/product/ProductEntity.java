package com.gustavo.backendcase.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
@Entity
@Table(name = "product_entity")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @NotBlank(message = "O nome não pode estar vazio.") 
    private String name;

    @NotNull(message = "O preço é obrigatório.") 
    @Positive(message = "O preço deve ser um valor positivo.") 
    private Double price;

    private String description;

    private Boolean available;

}

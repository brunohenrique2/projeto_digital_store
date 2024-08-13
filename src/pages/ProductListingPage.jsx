import { useEffect, useState } from "react";
import Sections from "../components/Sections";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import "../App.css";
import FilterGroup from "../components/FilterGroup";
import { useNavigate, useParams } from "react-router-dom";

const StyledProductListing = styled.section`
    .material-symbols-rounded {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }

    padding: 40px 6vw;

    & #product_listing_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--dark-gray-2);

        & p {
            line-height: 24px;
            letter-spacing: .75px;
        }

        & #order_list_container {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--dark-gray-2);
            border-radius: 4px;
            padding: 10px;
            cursor: pointer;

            & #order_list {
                background-color: transparent;
                cursor: pointer;
            }
        }
    }

    & #product_listing_bottom {
        display: flex;
        padding-top: 50px;
        gap: 28px;

        & .filtros_container {
            width: 308px;
            height: 720px;
            background-color: var(--white);
            padding: 30px;
            color: var(--dark-gray-2);
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            gap: 20px;

            & h2 {
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: .75px;
            }

            & hr {
                border: 1px solid var(--light-gray-2);
            }

            & .filter_group, & .filter_group ul{
                display: flex;
                flex-direction: column;
                gap: 10px;

                & h3 {
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 22px;
                    letter-spacing: normal.75px;
                }

                & li.checkbox {
                    display: flex;
                    gap: 10px;

                    & label {
                        width: 20px;
                        height: 20px;
                        border: 1px solid #666;
                        border-radius: 2px;
                        cursor: pointer;

                        & img {
                            width: 13px;
                        }
                    }

                    & input[type="checkbox"] {
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;

                        &:checked + label{
                            background-color: var(--primary);
                            border: 1px solid var(--primary);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            
                        }
                    }
                }

                & li.radio {
                    display: flex;
                    gap: 10px;

                    & label {
                        width: 22px;
                        height: 22px;
                        padding: 3px;
                        border: 1px solid #666;
                        border-radius: 50%;
                        cursor: pointer;

                        & img {
                            display: none;
                        }
                    }

                    & input[type="radio"] {
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;

                        &:checked + label{
                            border: 1px solid var(--primary);
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            & span {
                                background-color: var(--primary);
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
    }
`

const ProductListingPage = () => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const [produtos, setProdutos] = useState([])
    const { filter } = useParams()
    console.log(window.location.origin);
    

    useEffect(() => {
        // Buscar os produtos
        fetch(`${baseUrl}/productList`)
       .then(res => res.json())
       .then(data => {
            console.log(data)
            setProdutos(data)
        })
        .catch(error => {
            console.log("Erro ao buscar os produtos:", error)
        })
    }, [])

    // Filtrar os produtos de acordo com o filtro
    const produtos_filtrados = produtos.filter(produto => produto.category.toLowerCase().includes(filter.toLowerCase()) || produto.nome.toLowerCase().includes(filter.toLowerCase()))
        
    const marcasList = [
        {
            text: "Nike",
            value: "Nike",
            class: "marcas"
        },
        {
            text: "Adidas",
            value: "Adidas",
            class: "marcas"
        },
        {
            text: "Puma",
            value: "Puma",
            class: "marcas"
        },
        {
            text: "K-Swiss",
            value: "K-Swiss",
            class: "marcas"
        },
        {
            text: "Calenciaga",
            value: "Calenciaga",
            class: "marcas"
        }
        // Adicionar mais marcas aqui...
    ]

    const categoriasList = [
        {
            text: "Esporte e Lazer",
            value: "Esporte e Lazer",
            class: "categorias"
        },
        {
            text: "Casual",
            value: "Casual",
            class: "categorias"
        },
        {
            text: "Utilitario",
            value: "Utilitario",
            class: "categorias"
        },
        {
            text: "Corrida",
            value: "Corrida",
            class: "categorias"
        },
        {
            text: "Tênis",
            value: "Tênis",
            class: "categorias"
        }
        // Adicionar mais categorias aqui...
    ]

    const generoList = [
        {
            text: "Masculino",
            value: "Masculino",
            class: "generos"
        },
        {
            text: "Feminino",
            value: "Feminino",
            class: "generos"
        },
        {
            text: "Unissex",
            value: "Unissex",
            class: "generos"
        }
        // Adicionar mais gêneros aqui...
    ]

    const estadoList = [
        {
            text: "Novo",
            value: "Novo",
            class: "estados"
        },
        {
            text: "Usado",
            value: "Usado",
            class: "estados"
        }
        // Adicionar mais estados aqui...
    ]

    // Adicionar mais categorias aqui...

    return ( 
        <StyledProductListing>
            <div id="product_listing_top">
                <p><strong>Resultados para "{filter}"</strong> - {produtos_filtrados.length} produtos</p>
                <div id="order_list_container">
                    <p><strong>Ordernar por:</strong></p>
                    <select name="order_list" id="order_list">
                        <option value="">mais relevantes</option>
                        <option value="">mais vendidos</option>
                        <option value="">mais relevantes</option>
                        <option value="">mais relevantes</option>
                    </select>
                </div>
            </div>
            <div id="product_listing_bottom">
                <div className="filtros_container">
                    <h2>Filtrar por</h2>
                    <hr/>
                    <FilterGroup title="Marca" inputType="checkbox" options={marcasList}/>
                    <FilterGroup title="Categoria" inputType="checkbox" options={categoriasList}/>
                    <FilterGroup title="Gênero" inputType="checkbox" options={generoList}/>
                    <FilterGroup title="Estado" inputType="radio" options={estadoList}/>
                
                </div>
                <Sections title="" titleAlign="" link="" >
                        {
                            filter != null && filter.length > 0 && filter != undefined ?
                            // Mostrar os produtos que contêm o filtro
                            produtos_filtrados.map((produto, index) => (
                                <ProductCard 
                                    id={produto.id}
                                    key={index}
                                    img={produto.imagem} 
                                    price={produto.preco} 
                                    category={produto.category} 
                                    name={produto.nome} 
                                    priceDiscount={produto.priceDiscount}
                            />
                            ))
                            // Mostrar todos os produtos caso não haja filtro
                            : produtos.map((produto, index) => (
                                <ProductCard
                                    id={produto.id}
                                    key={index}
                                    img={produto.imagem}
                                    price={produto.preco}
                                    category={produto.category}
                                    name={produto.nome}
                                    priceDiscount={produto.priceDiscount}
                                />
                            ))
                        }
                </Sections>
            </div>
        </StyledProductListing>
     );
}
 
export default ProductListingPage;
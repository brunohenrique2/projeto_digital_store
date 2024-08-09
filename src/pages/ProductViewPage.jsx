import { useEffect, useState } from "react";
import BuyBox from "../components/BuyBox";
//import Gallery from "../components/Gallery";
import Sections from "../components/Sections";
import ProductCard from "../components/ProductCard";
import ProductOption from "../components/ProductOption";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Gallery from "../components/Gallery";

const StyledProductViewPage = styled.section`
    padding: 40px 6vw;
    
    & .product_view {
        display: flex;
        flex-direction: row;
        gap: 40px;

        & .gallery_container {
            display: flex;
            flex-direction: column;
            gap: 20px;

            & .gallery_destaque {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #E2E3FF;
                padding: 16px;

                & .gallery_destaque_img {
                    z-index: 0;
                }

                & .gallery_destaque_navigation {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    z-index: 2;
                    position: relative;
                    top: -134px;
                }
            }

            & .gallery_thumbs_container {
                display: flex;
                align-items: center;
                justify-content: space-between;

                & .gallery_thumbs {
                    width: 117px;
                    height: 96px;
                    background-color: #F2F2F2;
                    padding: 16px 10px;
                    cursor: pointer;

                    &.active {
                        border: 2px solid var(--primary);

                    }

                    & img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

`

const ProductViewPage = () => {
    const baseUrl = "http://localhost:3000"
    const [produto, setProduto] = useState({})
    const [produtosRelacionados, setProdutosRelacionados] = useState([])
    const { id } = useParams()
    const link = {
        text: "Ver Todos",
        href: "/produtos/all"
    };

    useEffect(() => {
        // Buscar o produto
        fetch(`${baseUrl}/productList?id=${id}`)
        .then(res => res.json())
        .then(data => {
            setProduto(data[0])
        })
    }, [])

    useEffect(() => {
        // Buscar os produtos relacionados
        fetch(`${baseUrl}/productList`)
       .then(res => res.json())
       .then(data => {
            setProdutosRelacionados(data)
       })
    }, [])

    const imagens = [
        {
            src: "../../src/assets/img/tenis4.png",
            bgColor: '#E2E3FF',
            alt: "Imagem 1"
        },
        {
            src: "../../src/assets/img/tenis4.png",
            bgColor: '#FFE8BC',
            alt: "Imagem 2"
        },
        {
            src: "../../src/assets/img/tenis4.png",
            bgColor: '#FFC0BC',
            alt: "Imagem 3"
        },
        {
            src: "../../src/assets/img/tenis4.png",
            bgColor: '#DEC699',
            alt: "Imagem 3"
        },
        {
            src: "../../src/assets/img/tenis4.png",
            bgColor: '#E8DFCF',
            alt: "Imagem 3"
        }
 
    ]

    return ( 
        <>
            <StyledProductViewPage className="product_view_page">
                <div className="product_view">
                    <Gallery 
                        className="gallery_container"
                        imagens={imagens} 
                        width="700px" 
                        height="571px" 
                        radius="4px" 
                        showThumbs={imagens.length > 1 ? true : false}/>
                    <BuyBox
                        name={produto.nome}
                        reference={produto.reference}
                        stars={produto.stars}
                        rating={produto.rating}
                        priceDiscount={produto.priceDiscount}
                        price={produto.preco}
                        description={produto.description}>
                        <ProductOption title="tamanhos" type="checkbox" options={produto.tamanhos || []}/>
                        <ProductOption title="cores" type="radio" options={produto.cores || []}/>
                    </BuyBox>
                </div>

                <Sections title="Produtos Relacionados" titleAlign="left" link={link}>
                    {
                        // Mostrar os produtos que contêm o filtro
                        produtosRelacionados.map((produto, index) => (
                            <ProductCard
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
            </StyledProductViewPage>
        </>
     );
}
 
export default ProductViewPage;
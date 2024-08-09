import TenisImg1 from "../assets/img/White-Sneakers-PNG-Clipart 1.png"
import TenisImg2 from "../assets/img/tenis2.png"
import Ornament from "../assets/icons/Ornament 11.svg"
import FeaturedColletion from "../components/FeaturedCollection";
import ColletionImg1 from "../assets/img/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png"
import ColletionImg2 from "../assets/img/ddd 1.png"
import ColletionImg3 from "../assets/img/d9db11953a2d185d37246bb1f500c957 1.png"
import TshirtIcon from "../assets/icons/tshirt_icon.svg"
import CalcaIcon from "../assets/icons/calca_icon.svg"
import HeadphoneIcon from "../assets/icons/headphone_icon.svg"
import TenisIcon from "../assets/icons/tenis_icon.svg"
import Sections from "../components/Sections";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Gallery from "../components/Gallery";

const HomePage = () => {
    const baseUrl = "http://localhost:3000"
    const link = {
        text: "Ver Todos",
        href: "/produtos/all"
    };
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/productList`)
       .then(res => res.json())
       .then(data => {
        console.log(data)
            setProdutos(data)
        })
        .catch(error => {
            console.log("Erro ao buscar os usuarios:", error)
        })
    }, [])

    const imageSlide = [
        {
            src: "../../src/assets/img/home-slide-1.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-2.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-3.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-4.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-5.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-6.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-7.jpeg",
            alt: "Nike Air Max"
        },
        {
            src: "../../src/assets/img/home-slide-8.jpeg",
            alt: "Nike Air Max"
        }
    ]

    return ( 
        <>
            <section id="home">
                <section className="promo_content_container">
                    <div className="promo_content">
                        <p className="promo_header">
                            Melhores ofertas personalizadas
                        </p>
                        <h2 className="promo_titulo">
                            Queima de stoque Nike 🔥
                        </h2>
                        <p className="promo_descricao">
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button className="promo_btn">Ver Ofertas</button>
                    </div>
                    <Gallery 
                        className="gallery_container"
                        imagens={imageSlide} 
                        width="100vw" 
                        height="681px"
                    />
                    <div className="promo_pages_container">
                        <label htmlFor="promo_page_1" className="promo_pages active">
                            <input type="radio" name="promo_page" id="promo_page_1" />
                        </label>
                        <label htmlFor="promo_page_2" className="promo_pages">
                        <input type="radio" name="promo_page" id="promo_page_2" />
                        </label>
                        <label htmlFor="promo_page_3" className="promo_pages">
                        <input type="radio" name="promo_page" id="promo_page_3" />
                        </label>
                        <label htmlFor="promo_page_4" className="promo_pages">
                            <input type="radio" name="promo_page" id="promo_page_1" />
                        </label>
                    </div>
                </section>
                <section className="featured_colletion_container">
                    <h2 className="featured_colletion_container_title">Coleções em Destaque</h2>
                    <div className="featured_colletion_space">
                        <FeaturedColletion id="colletion_1" title="Novo Drop Supreme" priceDescount="30%" img={ColletionImg1}/>
                        <FeaturedColletion id="colletion_2" title="Coleção Adidas" priceDescount="30%" img={ColletionImg2}/>
                        <FeaturedColletion id="colletion_3" title="Novo Beats Bass" priceDescount="30%" img={ColletionImg3}/>
                    </div>
                    <h2 className="featured_colletion_options_title">Coleções em Destaque</h2>
                    <div className="featured_colletion_options_container">
                        <div className="featured_colletion_options">
                            <div className="featured_colletion_options_img">
                                <img src={TshirtIcon} alt="" />
                            </div>
                            <p>Camisetas</p>
                        </div>
                        <div className="featured_colletion_options">
                            <div className="featured_colletion_options_img">
                                <img src={CalcaIcon} alt="" />
                            </div>
                            <p>Calças</p>
                        </div>
                        <div className="featured_colletion_options">
                            <div className="featured_colletion_options_img">
                                <img src={CalcaIcon} alt="" />
                            </div>
                            <p>Bonés</p>
                        </div>
                        <div className="featured_colletion_options">
                            <div className="featured_colletion_options_img">
                                <img src={HeadphoneIcon} alt="" />
                            </div>
                            <p>Headphones</p>
                        </div>
                        <div className="featured_colletion_options">
                            <div className="featured_colletion_options_img">
                                <img src={TenisIcon} alt="" />
                            </div>
                            <p>Tênis</p>
                        </div>
                    </div>
                </section>
                <Sections title="Produtos em alta" titleAlign="left" link={link}>
                    {
                        produtos.map(produto => (
                            <ProductCard 
                                img={produto.imagem} 
                                price={produto.preco} 
                                category={produto.category} 
                                name={produto.nome} 
                                priceDiscount={produto.priceDiscount}
                            />
                        ))
                    }
                </Sections>
                <section className="oferta_content_container">
                    <div className="oferta_content">
                        <p className="oferta_header">
                            Oferta especial
                        </p>
                        <h2 className="oferta_titulo">
                            Air Jordan edição de colecionador
                        </h2>
                        <p className="oferta_descricao">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                        <button className="oferta_btn">Ver Ofertas</button>
                    </div>
                    <div className="oferta_img_background">
                        <img className="oferta_img" src={TenisImg2} alt="Nike Air Shoe" />
                    </div>
                </section>
            </section>
        </>
     );
}
 
export default HomePage;
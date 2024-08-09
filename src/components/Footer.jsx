import IconTwiter from "../assets/icons/twiter1_icon.svg"
import IconFacebook from "../assets/icons/facebook_icon.svg"
import IconInstagram from "../assets/icons/instagram_icon.svg"
import Logo from "./Logo"
import Informations from "./Informations"
import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: var(--dark-gray);
    height: 454px;
    padding: 40px 6vw 0px 6vw;
    color: var(--white);

    & #footer_top {
        height: calc(100% - 61px);
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        & #sobre_container {
            width: 300px;
            height: 220px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            & #footer_logo {
                height: 44px;
                width: 253px;
            }

            & #redes_sociais {
                display: flex;
                justify-content: space-between;
                width: 120px;
            }
        }

        & .informations ul {
            display: flex;
            gap: 20px;
            flex-direction: column;
            height: calc(100% - 100px);
            margin-top: 40px;
            width: 180px;
        }
    }

    & #copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        padding: 20px 0px;
        border-top: 1px solid var(--dark-gray-3);
        position: relative;
        bottom: 0;
    }
`

const Footer = () => {
    const info_list = [
            {text: "Sobre Drip Store", link: "/sobre"},
            {text: "Segurança", link: "/seguranca"},
            {text: "Wishlist", link: "/wishlist"},
            {text: "Blog", link: "/blog"},
            {text: "Trabalhe Conosco", link: "/trabalhe-conosco"},
            {text: "Meus Pedidos", link: "/meus-pedidos"}
    ]

    const category_list = [
        {text: "Camisetas", link: "/camisetas"},
        {text: "Calças", link: "/calcas"},
        {text: "Bonés", link: "/bones"},
        {text: "Headphones", link: "/headphones"},
        {text: "Tênis", link: "/tenis"}
    ]

    const contact_list = [
        {text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "https://digitalcollege.com.br/"},
        {text: "(85) 3051-3411", link: "/"}
    ]
    return ( 
        <>
            <StyledFooter>
                <div id="footer_top">
                    <div id="sobre_container">
                        <Logo cor="#ffffff"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div id="redes_sociais">
                            <img src={IconFacebook} alt="" />
                            <img src={IconInstagram} alt="" />
                            <img src={IconTwiter} alt="" />
                        </div>
                    </div>
                    <Informations titulo="Informações" informations={info_list}/>
                    <Informations titulo="Categoria" informations={category_list}/>
                    <Informations titulo="Contato" informations={contact_list}/>
                </div>
                <div id="copyright">
                    <p>&copy; 2024 Digital College</p>
                </div>
            </StyledFooter>
        </>
     );
}
 
export default Footer;
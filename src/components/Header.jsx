
import IconSearch from"../assets/icons/Search.svg"
import IconBuy from "../assets/icons/Buy.svg"
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    height: 192px;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    padding: 20px 6vw;
    background-color: var(--white);

    & #header_top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & #search_container {
            height: 60px;
            width: 50%;
            display: flex;
            align-items: center;
            background-color: var(--light-gray);
            border-radius: 8px;
            padding-right: 24px;

            & #search {
                width: calc(100% - 24px);
                height: 60px;
                background-color: transparent;
                font-size: 16px;
                padding-left: 24px;
            }

            & button {
                background-color: transparent;
                cursor: pointer;
            }
        }

        & a {
            color: var(--dark-gray-2);
            text-decoration: underline;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: .75px;
        }

        & #btn_sign_in {
            height: 40px;
            width: 114px;
            border-radius: 4px;
            background-color: var(--primary);
            color: var(--white);
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
        }

        & #btn_buy {
            height: 22px;
            cursor: pointer;

            & #indicador_buy {
                height: 17px;
                width: 17px;
                background-color: var(--primary);
                border-radius: 50%;
                position: relative;
                top: -30px;
                right: -15px;
                display: flex;
                justify-content: center;
                align-items: center;

                & #quantidade_buy {
                    font-size: 12px;
                    font-weight: bold;
                    color: var(--white);
                }
            }
        }
    }

    & #nav {
        position: relative;
        bottom: 20px;

        & #nav_list {
            display: flex;
            gap: 15px;

            & li a {
                color: var(--dark-gray-2);

                &.active {
                    color: var(--primary);
                    text-decoration: underline;
                    font-size: 16px;
                }

                &:hover {
                    color: var(--primary);
                    text-decoration: underline;
                    font-size: 16px;
                }
            }
        }
    }

`

const Header = () => {
    const [filter, setFilter] = useState("")
    const navigate = useNavigate()

    // Função para filtrar produtos ao digitar no input de busca
    const handleSubmit = () => {
        navigate(`/produtos/${filter}`)
    }
    
    return ( 
        <>
            <StyledHeader>
                <div id="header_top">
                    <Logo cor="#C92071"/>
                    <form onSubmit={handleSubmit} id="search_container">
                        <input 
                            value={filter} 
                            type="text" 
                            name="filter" 
                            id="search" 
                            onChange={(e) => setFilter(e.target.value)} 
                            placeholder="Pesquisar produto..." 
                        />
                        <button type="submit"><img src={IconSearch} alt="icon search" /></button>
                    </form>
                    <p><a href="/cadastro">Cadastrar</a></p>
                    <button id="btn_sign_in">Entrar</button>
                    <div id="btn_buy">
                        <img src={IconBuy} alt="icone de compra" />
                        <div id="indicador_buy">
                            <p id="quantidade_buy">2</p>
                        </div>
                    </div>
                </div>
                <nav id="nav">
                    <ul id="nav_list">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={`/produtos/all`}>Produtos</NavLink></li>
                        <li><NavLink to={"/categoria"}>Categorias</NavLink></li>
                        <li><NavLink to={"meus-pedidos"}>Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
            </StyledHeader>
        </>

     );
}
 
export default Header;
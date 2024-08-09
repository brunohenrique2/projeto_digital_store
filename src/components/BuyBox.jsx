import styled from "styled-components";
import fullStar from "../assets/icons/fullStar.svg";
import emptyStar from "../assets/icons/emptyStar.svg";

const StyledBuyBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 20px;
    width: 440px;

    & .produto_info_name {
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1px;
        color: var(--dark-gray);
    }

    & .produto_info_reference {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: .5px;
        color: var(--dark-gray-3);
    }
    
    & .produto_info_rating_container {
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
            width: 16px;
            height: 16px;
        }

        & .produto_info_num_start {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            font-weight: 900;
            line-height: 24px;
            letter-spacing: 0.25px;
            color: var(--white);
            padding: 6px 12px;
            border-radius: 4px;
            background-color: var(--warning);
        }

        & .produto_info_rating {
            --light-gray: #8f8f8f;
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.25px;
            text-align: justify;
            color: var(--light-gray);
        }
    }

    & .produto_info_price_container {
        display: flex;
        align-items: baseline;
        gap: 10px;

        & .produto_info_currency_symbol {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            color: var(--dark-gray-2);
        }

        & .produto_info_price {
            font-size: 32px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 1px;
            color: var(--dark-gray-2);
        }

        & .produto_info_price_discount {
            display: none;
        }

        &.discount .produto_info_price {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: .75px;
            color: var(--light-gray-2);
            text-decoration: line-through;
        }

        &.discount .produto_info_price_discount {
            display: block;
            font-size: 32px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 1px;
            color: var(--dark-gray-2);
        }
    }

    & h3 {
        --light-gray: #8f8f8f;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: .75px;
        color: var(--light-gray);
    }

    & .produto_info_description {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.25px;
        color: var(--dark-gray-2);
    }

    & .produto_info_btn {
        height: 48px;
        width: 220px;
        border-radius: 8px;
        background-color: var(--warning);
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.75px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }
`

const BuyBox = ({name, reference, stars, rating, priceDiscount, price, description, children}) => {

    const renderStars = (stars) => {
        // Checa se stars é um numero e está entre 0 e 5
        if(isNaN(stars) || stars < 0 || stars > 5) {
            stars = 0;
        }
        
        // Arredonda o número de estrelas para baixo e cria arrays com a quantidade de estrelas cheias e vazias
        const roundedStars = Math.round(stars);
        const emptyStars = 5 - roundedStars;
    
        return (
            <>
                {[...Array(roundedStars)].map((_, index) => (
                    <img key={`full-${index}`} src={fullStar} alt="full star" />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                    <img key={`empty-${index}`} src={emptyStar} alt="empty star" />
                ))}
            </>
        );
    };

    return ( 
        <StyledBuyBox className="produto_info_content buy_box">
            <h2 className="produto_info_name">{name}</h2>
            <p className="produto_info_reference">{reference}</p>
            <div className="produto_info_rating_container">
                {
                    renderStars(stars)
                }
                <span className="produto_info_num_start">
                    {stars}
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#ffffff" stroke="#ffffff"/>
                    </svg>
                </span>
                <span className="produto_info_rating">({rating} avaliações)</span>
            </div>
            <div className={`produto_info_price_container ${priceDiscount > 0 & priceDiscount <= 1 ? "discount" : ""}`}>
                <span className="produto_info_currency_symbol">R$</span>
                <p className="produto_info_price_discount">{(price * priceDiscount).toFixed(2)}</p>
                <p className="produto_info_price">{price}</p>
            </div>
            <h3>Descrição do produto</h3>
            <p className="produto_info_description">{description}</p>
            {children}
            <button className="produto_info_btn">Comprar</button>
        </StyledBuyBox>
     );
}
 
export default BuyBox;
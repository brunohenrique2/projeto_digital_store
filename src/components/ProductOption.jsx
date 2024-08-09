import { useState } from "react";
import styled from "styled-components";

const StyledProductOptions = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & .product_options_content {
        display: flex;
        flex-direction: row;
        gap: 10px;

        & .product_option_tamanho {
            display: flex;
            
            & input[type="checkbox"] {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;

                &:checked + label{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--primary);
                    color: var(--white);
                    width: 48px;
                    height: 48px;
                    border: 1px solid var(--primary);
                    border-radius: 4px;
                    cursor: pointer;
                }
            }

            & label {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 48px;
                height: 48px;
                color: var(--dark-gray-2);
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 700;
                line-height: 26px;
                letter-spacing: .75px;
                transition: .3s;
                cursor: pointer;
            }
        }

        & .product_option_cor {
            display: flex;
            
            & input[type="radio"] {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;

                &:checked + label{
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--white);
                    width: 39px;
                    height: 39px;
                    border: 2px solid var(--primary);
                    border-radius: 50%;
                    padding: 2px;
                    cursor: pointer;
                }
            }

            & label {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 39px;
                height: 39px;
                border: 2px solid transparent;
                border-radius: 50%;
                font-size: 16px;
                font-weight: 700;
                line-height: 26px;
                letter-spacing:.75px;
                padding: 2px;
                cursor: pointer;

                & span {
                    background-color: var(--dark-gray-3);
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }
    }

`

const ProductOption = ({ title, type, options}) => {
    type === 'radio' ? options.map(option => {

    }) : ""

    return ( 
        <StyledProductOptions className="product_option_container">
            <h3>{title}</h3>
            <div className="product_options_content">
                {
                    type === "checkbox"?
                        options.map((option, index) => (
                            <div className="product_option_tamanho" key={index}>
                                <input type="checkbox" id={option} value={option} name="tamanhos" />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))
                        :
                        options.map((option, index) => (
                            <div className="product_option_cor" key={index}>
                                <input type="radio" id={option} value={option} name="cores" />
                                <label htmlFor={option}>
                                    <span style={{ backgroundColor: option }} className="product_option_cor_label_content"></span>
                                </label>
                            </div>
                        ))
                }

            </div>
        </StyledProductOptions>
     );
}
 
export default ProductOption;
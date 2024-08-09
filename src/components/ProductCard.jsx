const ProductCard = ({img, price, category, name, priceDiscount}) => {

    const newPrice = price - (price * priceDiscount)

    return ( 
        <>
            <div className={`product_card ${priceDiscount > 0 && priceDiscount <= 1 ? "discount" : ""}`}>
                <div className="product_card_img_container">
                    <p className="product_card_discount_tag">{priceDiscount > 0 && priceDiscount < 1 ? priceDiscount * 100 : priceDiscount * 100}% off</p>
                    <img className="product_card_img" src={img} alt="Imagem do produto" />
                </div>
                <div className="product_card_content">
                    <p className="product_card_category">{category}</p>
                    <h3 className="product_card_name">{name}</h3>
                    <div className="product_card_price_container">
                        <p className="product_card_price">${price}</p>
                        <p className="product_card_price_discount">${Number(newPrice.toFixed(2))}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductCard;
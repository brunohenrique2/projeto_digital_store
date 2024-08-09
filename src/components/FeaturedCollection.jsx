const FeaturedColletion = ({id, title, priceDescount, img}) => {

    return ( 
        <>
            <div id={id} className="featured_colletion">
                <img className="featured_colletion_img" src={img} alt="imagem do produto" />
                <div className="featured_colletion_content">
                    <p className="featured_colletion_descount">{priceDescount} off</p>
                    <h3 className="featured_colletion_title">{title}</h3>
                    <button className="featured_colletion_btn">Comprar</button>
                </div>
            </div>
        </>
     );
}
 
export default FeaturedColletion;
import { useState } from 'react';
import arrowLeft from '../assets/icons/arrow_left.svg';
import arrowRight from '../assets/icons/arrow_right.svg';

const Gallery = ({imagens, radius, className, width, height, showThumbs}) => {
    const [currentImage, setCurrentImage] = useState(0)

    // Avança para a proxima imagem
    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % imagens.length)
    }

    // Volta para a imagem anterior
    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length)
    }

    // Ir para a imagem desejada pelo index
    const goToImage = (index) => {
        setCurrentImage(index)
    }
    return ( 
        <>
            <div className={`${className}`}>
                <div className="gallery_destaque" style={{width: width, height: height, borderRadius: radius, backgroundColor: imagens[currentImage].bgColor}}>
                    <img className='gallery_destaque_img' src={imagens[currentImage].src} alt={imagens[currentImage].alt} />
                    <div className="gallery_destaque_navigation">
                        <img src={arrowLeft} alt="previous" onClick={prevImage} style={{cursor: 'pointer'}}/>
                        <img src={arrowRight} alt="next" onClick={nextImage} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                {
                    showThumbs && (
                        <div className="gallery_thumbs_container">
                            {imagens.map((image, index) => (
                                <div 
                                    className="gallery_thumbs" 
                                    style={{borderRadius: radius, backgroundColor: image.bgColor}} 
                                    onClick={() => goToImage(index)}>

                                    <img
                                        key={index}
                                        src={image.src}
                                        alt={image.alt} />

                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
     );
}
 
export default Gallery;
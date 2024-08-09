import styled from "styled-components";

const StyledSection = styled.section`
    padding: 40px 6vw;
    
    & .section_title_left {
        text-align: left;
    }

    & .section_title_center {
        text-align: center;
    }

`

const Sections = ({ title, titleAlign,  children, link }) => {
    return ( 
        <>
        <StyledSection className="section_product_listing">
            <div className="section_product_listing_header">
                <h2 className={`section_title_${titleAlign === "left" ? "left" : titleAlign === "center" ? "center" : "left"}`}>{title}</h2>
                <a href={link.href} className="section_link">{link.text}</a>
            </div>
            <div className="section_product_listing_container">
                {children}
            </div>
        </StyledSection>
        </>
     );
}
 
export default Sections;
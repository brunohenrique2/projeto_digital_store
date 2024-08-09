import Footer from "../components/Footer";
import Header from "../components/Header";

const PageLayout = ({ children }) => {
    return ( 
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
     );
}
 
export default PageLayout;
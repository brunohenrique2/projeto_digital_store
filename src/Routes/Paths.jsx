import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Page404 from "../pages/Page404";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
    // Adicione as rotas aqui
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout><Outlet/></PageLayout>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/produtos/:filter" element={<ProductListingPage/>}/>
                        <Route path="/produto/:id" element={<ProductViewPage/>}/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;
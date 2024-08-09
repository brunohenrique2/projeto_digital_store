import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <>
            <h2>Pagina não encontrada</h2>
            <p><Link to={"/"}>Voltar</Link></p>
        </>
     );
}
 
export default Page404;
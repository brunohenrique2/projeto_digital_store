const Informations = ({titulo, informations}) => {
    return ( 
        <div className="informations">
            <h4>{titulo}</h4>
            <ul>
                {
                    informations.map((info, index) => (
                        <li key={index}><a href={info.link}></a>{info.text}</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Informations;
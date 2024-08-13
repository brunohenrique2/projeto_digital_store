import checkIcon from '../assets/icons/check.svg';

const FilterGroup = ({ title, options, inputType}) => {
    return ( 
        <div className="filter_group">
            <h3>{title}</h3>
            <ul>
                {
                    options.map((option, index) => (
                        <li key={index} className={inputType === "checkbox" ? 'checkbox' : 'radio'}>
                            <input 
                                type={inputType} 
                                value={option.value} 
                                id={option.value} 
                                name={option.class} 
                            />
                            <label htmlFor={option.value}><span></span><img src={checkIcon} /></label>
                            <span>{option.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default FilterGroup;
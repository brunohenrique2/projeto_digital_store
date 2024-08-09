const FilterGroup = ({ title, options, inputType}) => {
    return ( 
        <div className="filter_group">
            <h3>{title}</h3>
            <ul>
                {
                    options.map(option => (
                        <li>
                            <input type={inputType} value={option.value} id={option.value} name={option.class} />
                            <label htmlFor={option.value}>{option.text}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default FilterGroup;
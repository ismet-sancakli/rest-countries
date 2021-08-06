import { Link } from "react-router-dom";

const Flag = ({country}) => {    
    
    return(

        <div className="col-3"> 
            <Link to={country.alpha2Code}>

                <h2>{country.name}</h2>
                <p>

                    <img src={country.flag} alt={country.name} className="img-thumbnail"/>

                </p>
                
            </Link>
            
        </div>

    );
}

export default Flag;
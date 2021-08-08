import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

const FlagDetail = (props) => {

    let { countryCode } = useParams();     
    
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/alpha/" + countryCode)
            .then((response) => response.json())
            .then((json) => {
                setDetail(json)                
            })
    },[countryCode])
   
    return (
        <div>
            <ul>
                <li>                
                    {detail.capital}                
                </li>
                <li>
                    {detail.name}
                </li>
                <li>
                    {detail.flag}
                </li>                
            </ul>            
        </div>        
    );
}
export default FlagDetail;

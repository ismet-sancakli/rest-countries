import { useEffect, useState } from "react"
import Flag from "./Flag"   

const Flags = () => {

    let [flags, setFlags] = useState([])

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json())
            .then((json) => {
                setFlags(json) // json şeklinde dosyayı elde ettik. Burada obje olarak dönüş sağlamadığımız için json.flags kullanmadık.
            })
    }, [])

    return (
        <div className="row">
            <h2>Countries Properties</h2>

            {flags.map((country) => (
                <Flag key={country.alpha2Code} country={country}/>
            ))}       

        </div>
    )
}

export default Flags;
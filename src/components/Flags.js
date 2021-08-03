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
            <h2>Flags</h2>

            {flags.map((country) => (
            <Flag name={country.name} capital={country.capital} image={country.flag}></Flag>
            ))}       

        </div>
    )
}

export default Flags;
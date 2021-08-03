const Flag = (props) => {    
    
    return(
        
        <div className="col-3"> 
            <h2>{props.name}</h2>
            <h4>{props.capital}</h4>
            <p><img src={props.image} alt={props.name} className="img-thumbnail"/></p>

        </div>        
    );
}

export default Flag;
import React,{useEffect,useState} from "react";
import axios from "axios";


const ComponenteLuke = (props) =>{

    const [categorias,setCategorias] = useState("people");
    const [id,setId] = useState("");
    const [click,setClick] = useState(1);
    const [result, setResult] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const HizoClick = () => {
        setClick(prev => !prev);
    }

    const apiCall = async()=>{
        try{
            const {data} = await axios.get(`https://swapi.dev/api/${categorias}/${id}`);
            setResult(data)
        }
        catch{
            setResult({});
        }
    };
        useEffect(()=>{
            apiCall();
        },[click]);
    

    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="form-group">
            <label htmlFor="categorias">seach for </label>
            <select name="categorias" id="categorias" value={categorias} onChange={(e) =>setCategorias(e.target.value)}>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            <label htmlFor="id">id: </label>
            <input type="text" id="id" name="id" value={id} onChange={(e) =>setId(e.target.value)}/>
            <input type="submit" value="buscar" onClick={() =>setClick((prev)=>(prev +=1))}/>
            </form>

            <div className="card">
            <p>{result.name}</p>
            {result.title}
            <p>{result.height}</p>
            <p>{result.hair_color}</p>
            <p>{result.bith_year}</p>
            <p>{result.gender}</p>
            <p>{result.manufacturer}</p>
            <p>{result.starship_class}</p>
            <p>{result.passengers}</p>
            <p>{result.cargo_capacity}</p>
            <p>{result.director}</p>
            <p>{result.producer}</p>
            <p>{result.release_data}</p>
            <p>{result.rotation_period}</p>
            <p>{result.diameter}</p>
            <p>{result.climate}</p>
            </div>
        </div>
        
    
    )


}

export default ComponenteLuke;
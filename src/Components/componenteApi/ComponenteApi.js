import axios from "axios";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const ComponenteApi = (props)=>{

    const {id} =useParams();
    const[results,setResults] = useState;

    const apiCall = async ()=>{
        const{data} = await axios.get(`https://swapi.dev/api/${id}`)
            setResults(data);
    }
    useEffect(()=>{
        apiCall();
    },[]);


    return(

        <div className="container">
            <div className="card">
                nombre:{results.name}
                {results.height}
                {results.hair_color}
                {results.birth_year}
                {results.gender}
            </div>
        </div>
    )
}

export default ComponenteApi;
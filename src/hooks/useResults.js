import {useState, useEfferct, useEffect} from 'react';
import yelp from "../api/yelp";

export default () =>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{
        try{
            const response = await yelp.get('search',{
                params:{
                    limit:5,
                    term:searchTerm,
                    location:'Cerreto Guidi'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        }catch (e) {
            setErrorMessage('Errore! Qualcosa è andato storto');
        }

    };

    //chiamo la search Api quando la schermata viene renderizzata per la prima volta
    useEffect(() => {
        searchApi('pasta');
        console.log(results)
    },[]);

    return [searchApi,results,errorMessage];
}

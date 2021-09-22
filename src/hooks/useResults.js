import {useState, useEfferct, useEffect} from 'react';
import yelp from "../api/yelp";

export default () =>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{
        try{
            const response = await yelp.get('search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'Milano'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        }catch (e) {
            setErrorMessage('Errore! Qualcosa è andato storto');
        }

    };

    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi,results,errorMessage];
}

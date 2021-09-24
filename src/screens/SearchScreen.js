import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultByPrice = (price) =>{
        //price = '$' || '$$' || '$$$'
        return results.filter((result)=>{
            return result.price === price;
        })
    }

    return(
        <View>
            <SearchBar
                term={term}
                onChangeTerm={(newTerm)=>setTerm(newTerm)}
                onTermSubmitted={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>abbiamo trovato {results.length} risultati</Text>
            <ResultList results={filterResultByPrice('$')} title="Cost effective" />
            <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultByPrice('$$$')} title="Big Expensive" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();


    //chiamo la search Api quando la schermata viene renderizzata per la prima volta

    return(
        <View>
            <SearchBar
                term={term}
                onChangeTerm={(newTerm)=>setTerm(newTerm)}
                onTermSubmitted={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>Abbiamo trovato {results.length} ristoranti</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;

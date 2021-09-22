import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

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
            <ResultList title="Cost effective" />
            <ResultList title="Bit Pricier" />
            <ResultList title="Big Expensive" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;

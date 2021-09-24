import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultByPrice = (price) =>{
        //price = '$' || '$$' || '$$$'
        return results.filter((result)=>{
            /*if(price === '$'){
                return result.price === '$' || result.price === ''
            }*/
            return result.price === price;
        })
    }

    return(
        <>
            <SearchBar
                term={term}
                onChangeTerm={(newTerm)=>setTerm(newTerm)}
                onTermSubmitted={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text style={styles.text}>abbiamo trovato {results.length} risultati</Text>
            <ScrollView>
                <ResultList
                    results={results}
                    title="Non filtrati"
                />
                <ResultList
                    results={filterResultByPrice('$')}
                    title="Cost effective"
                />
                <ResultList
                    results={filterResultByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultList
                    results={filterResultByPrice('$$$')}
                    title="Big Expensive"
                />
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    text:{
        marginLeft:20,
        marginBottom:10,
    }
});

export default SearchScreen;

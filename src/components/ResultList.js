import React from 'react';
import {View, Text, StyleSheet,FlatList} from "react-native";
import ResultDetail from "../components/ResultDetail";

const ResultList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={ results }
                horizontal
                keyExtractor={ ( result ) => result.id}
                renderItem={ ({item}) => {return (<ResultDetail item={item}/>)}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20,
    }
});

export default ResultList;

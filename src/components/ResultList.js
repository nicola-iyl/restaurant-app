import React from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from "react-native";
import ResultDetail from "../components/ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({title, results, navigation}) => {
    if(!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={ results }
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ ( result ) => result.id}
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity onPress={ ()=>{ navigation.navigate('Detail', {id: item.id})} }>
                            <ResultDetail item={item}/>
                        </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20,
    },
    container:{
        marginBottom:10,
    }
});

export default withNavigation(ResultList);

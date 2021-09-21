import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
    return(
        <View style={styles.backgorund}>
            <Feather name="search" size={30} />
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgorund:{
        backgroundColor:'#F0EEEE',
        marginHorizontal:15,
        height:50,
        borderRadius:5

    }
});

export default SearchBar;

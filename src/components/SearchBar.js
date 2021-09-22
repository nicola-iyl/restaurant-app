import React from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onChangeTerm, onTermSubmitted}) => {
    return(
        <View style={styles.viewPrimary}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize = 'none'
                autoCorrect = {false}
                style={styles.textInput}
                placeholder = 'search'
                value={term}
                onChangeText = {onChangeTerm}
                onEndEditing = {onTermSubmitted}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewPrimary:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        marginHorizontal:15,
        height:50,
        borderRadius:5,
        flexDirection:'row',

    },
    textInput:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;

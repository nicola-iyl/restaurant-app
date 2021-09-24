import React from 'react';
import {Text,View,StyleSheet,Image}  from "react-native";

const ResultDetail = ({item})=>{
    return(
        <View style={styles.box}>
            <Image
                source={{uri:item.image_url}}
                style={styles.cover}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text>Rating: { item.rating } , Reviews:{ item.review_count }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        marginVertical:10,
        marginHorizontal:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
    },
    cover:{
        width:200,
        height:120
    }
});

export default ResultDetail;

import React,{useState, useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Image} from "react-native";
import yelp from "../../src/api/yelp";

const DetailScreen = ({navigation}) =>{

    const [detail,setDetail] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) =>{
        const response = await yelp.get("/"+ id);
        setDetail(response.data);
    };

    useEffect(()=>{
        getResult(id);
        },
    []);

    //console.log(detail)

    if(!detail){
        return (
            <Text>aspettiamo</Text>
        );
    }

    return(
        <View>
            <Text>{detail.name}</Text>
            <FlatList
                data={detail.photos}
                keyExtractor = {(photo) => photo}
                renderItem = {({ item }) =>{
                    return(
                        <Image style={styles.image} source={{uri:item}} />
                    );
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    image:{
        width:200,
        height:120,
        marginBottom:20,
        marginLeft:20
    }
});

export default DetailScreen;

import { View, Text, StyleSheet, Image } from "react-native";

const ImgShowPage=()=>{
    return(
        <View style={styles.img_body}>
            <Text style={styles.textStyle}>This is IMG text</Text>
            <Image style={styles.imgaeStyle} source={require('../../../assets/nature.jpeg')}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    img_body:{
        // height:100,
        justifyContent:'center',//veritically center
        alignItems:'center', //horizentally center
        // display:'flex'
    },
    textStyle:{
        color:"green",
        fontSize:10
    },
    imgaeStyle:{
        height:80,
        width:120
    }
})

export default ImgShowPage;
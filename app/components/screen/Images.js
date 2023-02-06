import { View, Text, StyleSheet, Image, Button } from "react-native";


import ImgComponentPage from "../ImgComponent";
import NetFlixComponentPage from "../NetFlixCard";

const ImgShowPage = ({ navigation }) => {
    return (
        <>
            <View>
                <ImgComponentPage
                    imgsource={require('../../../assets/nature.jpeg')}
                />
                <Button
                    title="nextflix"
                    onPress={() => navigation.navigate('NetFlix')}
                />
                {/* <NetFlixComponentPage 
                
                /> */}
            </View>

        </>

    )
}


export default ImgShowPage;
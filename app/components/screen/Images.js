import { View, Text, StyleSheet, Image } from "react-native";

import ImgComponentPage from "../ImgComponent";
import NetFlixComponentPage from "../NetFlixCard";

const ImgShowPage = () => {
    return (
        <>
            <View>
                <ImgComponentPage
                    imgsource={require('../../../assets/nature.jpeg')}
                />
                <NetFlixComponentPage 
                
                />
            </View>

        </>

    )
}


export default ImgShowPage;
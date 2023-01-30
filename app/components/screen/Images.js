import { View, Text, StyleSheet, Image } from "react-native";

import ImgComponentPage from "../ImgComponent";

const ImgShowPage = () => {
    return (
        <>
            <ImgComponentPage
                imgsource={require('../../../assets/nature.jpeg')}
            />
            <ImgComponentPage
                imgsource={require('../../../assets/nature.jpeg')}
            />
        </>

    )
}


export default ImgShowPage;
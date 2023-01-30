import { View, Text, Image, StyleSheet } from 'react-native'

const ImgComponentPage = ({ imgsource }) => {

    return (
        <>
            <View style={styles.img_body}>
                <Text style={styles.textStyle}>This is img component</Text>
                <Image
                    style={styles.imgaeStyle}
                    source={imgsource}
                />
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    img_body: {
        // height:100,
        justifyContent: 'center',//veritically center
        alignItems: 'center', //horizentally center
        // display:'flex'
    },
    textStyle: {
        color: "green",
        fontSize: 10
    },
    imgaeStyle: {
        height: 80,
        width: 120
    }
})

export default ImgComponentPage;
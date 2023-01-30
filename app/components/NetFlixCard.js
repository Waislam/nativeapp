import { View, Text, StyleSheet, Image, Button, Linking } from "react-native";
import ImgComponentPage from "./ImgComponent";

const NetFlixComponentPage = () => {
    return (
        <>
            {/* <View style={{...styles.card_body_style, ... styles.poster_body}}> */}
            {/* <View style={[styles.card_body_style, styles.poster_body]}> */}
            {/* //multiple style class above two lines */}
            <View style={styles.card_body_style}>
                <Text>Next Flix Page</Text>
                <View style={styles.poster_body}>
                    <View>
                        <Image
                            style={styles.imgage_body}
                            source={{ uri: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        />
                    </View>
                    <View>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </Text>
                    </View>
                        <Button 
                            title="React native"
                            onPress={()=>Linking.openURL('https://reactnative.dev/docs/getting-started')}
                        />
                    <View>

                    </View>
                </View>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    card_body_style: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgage_body: {
        // height: 80,
        //below code is for heigh, width size adjust will container size korar jonno
        height:undefined,
        aspectRatio:1,
        width: '100%',
    },
    poster_body: {
        width: 150,
        borderWidth: 2, //borader dewar jonno
        alignItems: 'center',
        justifyContent: 'center',
        // height:'100%'//percent use korte hole
        // height:150,
        padding: 5
    }
})

export default NetFlixComponentPage;
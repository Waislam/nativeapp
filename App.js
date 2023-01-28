import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from "./app/globals/Styles"

import FirstPageComponent from './app/components/screen/FirstPage';
import ImgShowPage from "./app/components/screen/Images"

export default function App() {

    return (
        <View style={styles.my_container}>
            <Text style={styles.text_color}>Firt app</Text>
            <Button title='Go' />
            <Button title='Ayman' />
            {/* <StatusBar style="auto" /> */}
            {/* <Text>Another text here with </Text> */}
            <ImgShowPage />
            <FirstPageComponent />
            
        </View>
    );
}

// const new_styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'grey',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

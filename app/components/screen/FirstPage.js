import { View, Text } from "react-native";
import styles from "../../globals/Styles";
import DemoListPage from "./DemoList";


const FirstPageComponent = () => {
    const myname = <Text>Waliul Islam</Text>
    return (
        <View>
            <Text style={styles.first_chanllenge}>This is new text from first page</Text>
            <Text style={styles.first_chanllenge}>My name is {myname}</Text>
            <DemoListPage />
            
        </View>
    )

}

export default FirstPageComponent;
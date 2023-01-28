import { View, Text } from "react-native";
import { FlatList } from "react-native";
import styles from '../../globals/Styles'

const DemoListPage = () => {
    const sampleData = [
        { key: "1", "name": "waliul", "father_name": "Abdur Rahim" },
        { key: "2", "name": "jawad Ayman", "father_name": "Walil Islam" },
        { key: "3", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "4", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "5", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "6", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "7", "name": "Moaz Ayman11111", "father_name": "Walil Islam" },
        { key: "8", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "9", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "10", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "11", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "12", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "13", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "14", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "15", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "16", "name": "Moaz Ayman", "father_name": "Walil Islam" },
        { key: "17", "name": "Moaz Ayman3333", "father_name": "Walil Islam" },
    ]

    return (
        <View>
            <Text>this is list page</Text>
            <View>
                <FlatList
                    style={`${styles.list_text_style}`}
                    // horizontal // eita liklei list item colums theke horizental hoyejabe
                    // showsHorizontalScrollIndicator={false} //eita dile horizental list er niche j indicatior thake ta remove hoye jabe

                    // numColumns={2} //num of colums use korle keyExtractor dite hoy na

                    // inverted //reverse serial data newar jonno

                    keyExtractor={(item) => (item.key)}
                    data={sampleData}
                    renderItem={(singleItem) => (
                        <>
                            <View style={styles.list_items}>
                                <Text>name: {singleItem.item.name}</Text>
                                <Text>Father: {singleItem.item.father_name}</Text>
                            </View>

                        </>

                    )}
                />
            </View>
        </View>
    )
}

export default DemoListPage;
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://img.icons8.com/color/344/training.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://img.icons8.com/fluency/344/about.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://img.icons8.com/ios/344/duplicate-contacts.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://img.icons8.com/color/344/man_reading_a_book.png" }}
                />
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30
    }, buttonStyle: {
        paddingHorizontal: 20,
        fontSize: 30
    }, imageStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
        marginBottom: 10
    }
})

export default Menu

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../Components/Menu'

const Home = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis asperiores libero sunt facilis fuga exercitationem laboriosam minus voluptatibus. Repudiandae?"
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image
                    resizeMode="contain"
                    style={styles.headerImage}
                    source={require("../../assets/edu.jpg")}
                />
                <Text style={styles.title}>Welcome to</Text>
                <Text style={[styles.title, {
                    fontSize: 35,
                    color: "#4c5dab",
                    paddingTop: 0,
                    fontWeight: "bold",
                    fontFamily: "JosefinSans_600SemiBold"
                }]}>Farhad Hossain</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.menuStyle}>

                    <Menu /></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20

    },
    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 100,
        marginBottom: 20,
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        color: "#344055",
        textTransform: "uppercase",
        fontFamily: "JosefinSans_600SemiBold"
    },
    description: {
        fontSize: 18,
        textAlign: "justify",
        marginTop: 20,
        color: "gray",
        marginBottom: 50,
        fontFamily: "JosefinSans_400Regular"
    },
    menuStyle: {
        marginBottom: 50,
    }

})

export default Home;

import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>Md Farhad Hossain</Text>
            <Text style={styles.subHeader}>I am full stack web developer</Text>
            <View>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }}
                />
            </View>
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={styles.paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum ratione officia ullam dolorum similique beatae dignissimos porro aperiam tempora!</Text>
            </View>
            <Text style={styles.mainHeader}>Follow me on social service</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://www.linkedin.com/feed/")}
                ><Image
                        style={styles.iconStyle}
                        source={{ uri: "https://img.icons8.com/color/344/instagram-new--v1.png" }}
                    /></TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://www.youtube.com/watch?v=kxOWr-cSbHM")}
                ><Image
                        style={styles.iconStyle}
                        source={{ uri: "https://img.icons8.com/3d-fluency/344/youtube-play.png" }}
                    /></TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://www.facebook.com/")}
                ><Image
                        style={styles.iconStyle}
                        source={{ uri: "https://img.icons8.com/fluency/452/facebook-new.png" }}
                    /></TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    }, imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    mainHeader: {
        fontSize: 20,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10, lineHeight: 30,
        fontFamily: "JosefinSans_700Bold"
    }, subHeader: {
        fontSize: 18,
        textTransform: "capitalize",
        fontFamily: "JosefinSans_400Regular",
        marginBottom: 10,
        lineHeight: 30
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        marginVertical: 30,
        paddingHorizontal: 20,
    },
    aboutSubHeader: {
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
        paddingVertical: 20,
        textTransform: "uppercase",
        // lineHeight: 30,
        alignSelf: "center",
        fontFamily: "JosefinSans_700Bold"
    }, paraStyle: {
        fontSize: 18,
        color: "#fff",
        lineHeight: 25,
        textAlign: "justify",
        paddingBottom: 20,
        fontFamily: "JosefinSans_500Medium"
    }, iconStyle: {
        width: "100%",
        height: 60,
        aspectRatio: 1
    }, menuContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }

});
export default About;

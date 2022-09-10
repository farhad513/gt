import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import Courses from './../api/Courses';
import Courses from '../api/Courses';
const Course = ({ navigation }) => {
    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.cardContainer}>
                    <View >
                        <Image
                            style={styles.imageStyle}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={(() => navigation.navigate("CourseDetails", { courseId: item.id }))}>
                            <Text style={styles.buttonText}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={Courses}
                renderItem={courseCard}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    },
    mainContainer: {
        paddingHorizontal: 20
    },
    cardContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30
    }, textStyle: {
        fontSize: 32,
        color: "#542165",
        marginBottom: 10, textAlign: "center",
        fontFamily: "JosefinSans_700Bold"
    },
    description: {
        fontSize: 18,
        color: "gray",
        textAlign: "justify",
        marginBottom: 10,
        fontFamily: "JosefinSans_400Regular",
        lineHeight: 20
    },
    buttonContainer: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "row"
    }, buttonStyle: {
        backgroundColor: "#0000CD",
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,

    }, buttonText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "JosefinSans_500Medium"
    }
});
export default Course;

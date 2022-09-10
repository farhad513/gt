import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Courses';
const CourseDetails = ({ navigation, route }) => {
    const id = route.params.courseId;
    // console.log(id);
    const selectedCourse = Courses.find((element) => {
        return id === element.id;
    })
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cardContainer}>
                <View >
                    <Image
                        style={styles.imageStyle}
                        source={selectedCourse.image}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.textStyle}>{selectedCourse.title}</Text>
                <Text style={styles.description}>{selectedCourse.description}</Text>
                <Text style={styles.course}>{selectedCourse.course1}</Text>
                <Text style={styles.course}>{selectedCourse.course2}</Text>
                <Text style={styles.course}>{selectedCourse.course3}</Text>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.buttonStyle, styles.buttonText]}>$ {selectedCourse.price}</Text>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={(() => navigation.navigate("Course", { courseId: selectedCourse.id }))}>
                        <Text style={styles.buttonText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    },
    textStyle: {
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
    course: {
        fontFamily: "JosefinSans_400Regular",
        fontSize: 18,
        textAlign: "center",
        // paddingVertical: 10
    },
    buttonContainer: {
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 15,
    },
    buttonStyle: {
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
        fontFamily: "JosefinSans_500Medium",

    }
});

export default CourseDetails

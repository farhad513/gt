import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [myData, setMyData] = useState([])
    const [isLoadded, setIsLoadded] = useState(true);
    const getUserData = async () => {
        try {
            const res = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const data = await res.json();
            setMyData(data)
            setIsLoadded(false)

        } catch (error) {
            console.log(error);
        }
    }
    // console.log(myData);
    useEffect(() => { getUserData() }, [])
    const showUserData = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle}
                        source={{ uri: item.image }}
                    />
                </View>
                <View >
                    <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio Data</Text>
                        <Text style={styles.idNumber}>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                    </View>
                    <View style={styles.mainContain}>
                        <Text style={styles.myName}>Name : {item.name}</Text>
                        <Text style={styles.myName}>Email : {item.email}</Text>
                        <Text style={styles.myName}>Phone : {item.mobile}</Text>
                    </View>
                </View>
            </View >
        )
    }
    return (
        <View>
            <Text style={styles.textHeader}>List of Students</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={myData}
                renderItem={showUserData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        paddingVertical: 50,
        backgroundColor: "#ebedee"
    },
    card: {
        width: 260,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 20
    },
    bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#353535",
        justifyContent: "space-between",
        textAlign: "center",
        paddingVertical: 10,
        fontFamily: "JosefinSans_400Regular",
        paddingHorizontal: 10
    },
    bioData: {
        fontSize: 30,
        color: "#fff",
        fontFamily: "JosefinSans_400Regular"
    },
    idNumber: {
        fontSize: 16,
        color: "#fff",
        fontFamily: "JosefinSans_400Regular",
        paddingTop: 10
    },
    textHeader: {
        fontSize: 40,
        fontFamily: "JosefinSans_400Regular",
        color: "#a18ce5",
        textAlign: "center",
    },
    imageContainer: {
        padding: 10
    }, imageStyle: {
        width: "100%",
        height: 180
    },
    mainContain: {
        padding: 10,
        backgroundColor: "#353535",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    }, myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "uppercase",
        fontFamily: "JosefinSans_400Regular"
    }

});


export default UserData;
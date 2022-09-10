import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setChecked] = useState(false);
  // console.log(name, email, phone, message);
  // if(name === "Farhad Hossain" )
  const submit = () => {
    if (!name && !email && !phone && !message) {
      return Alert.alert("Please fill all the fields")
    }
    else {
      Alert.alert(`Thank You ${name}`)
      navigation.navigate("Home")
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>you can reach us via noreply@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput style={styles.inputStyle}
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder={"Farhad Hossain"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput style={styles.inputStyle}
          placeholder={"farhad@gmail.com"}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Phone Number</Text>
        <TextInput style={styles.inputStyle}
          value={phone}
          onChangeText={(value) => setPhone(value)}
          placeholder={"01518690471"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How Can We Help You? </Text>
        <TextInput style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"tell us about your self"}
          value={message}
          onChangeText={(value) => setMessage(value)}
          numberOfLines={5}
          multiline={true}
        />
      </View>
      {/*Checkbox */}
      <View style={styles.wrapper}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.wrapperText}> I have agreed with the terms and conditions</Text>
      </View>
      <TouchableOpacity style={[styles.buttonStyle, {
        backgroundColor: isChecked ? "#4630EB" : "gray"
      }]}
        disabled={!isChecked}
        onPress={submit}
      >
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff"
  }, mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    fontFamily: "JosefinSans_500Medium",
    paddingTop: 20, paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 23, paddingBottom: 20
  }, inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0,.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 2,
  }, inputContainer: {
    paddingTop: 20
  }, labels: {
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 5,
    lineHeight: 25,
    color: "#7d7d7d"
  }, multilineStyle: {
    paddingVertical: 4
  },
  buttonStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  buttonText: {
    color: "#fff"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },
  wrapperText: {
    lineHeight: 20,
    marginLeft: 10,
  }

})

export default Contact;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import CourseDetails from './src/screens/CourseDetails';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';
export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/*Home Screen*/}
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {(props) => <Home {...props} />}
        </Stack.Screen>
        {/*About Screen*/}
        <Stack.Screen name='About' component={About}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Nunito_600SemiBold"
              fontFamily: "JosefinSans_700Bold"
            }
          }}
        />
        {/*Contact Screen*/}
        <Stack.Screen name='Contact' component={Contact}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Nunito_600SemiBold"
              fontFamily: "JosefinSans_700Bold"
            }
          }} />
        {/*Course Screen*/}
        <Stack.Screen name='Course' component={Course}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Nunito_600SemiBold"
              fontFamily: "JosefinSans_700Bold"
            }
          }} />
        {/*UserData Screen*/}
        <Stack.Screen name='Student' component={UserData}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Nunito_600SemiBold"
              fontFamily: "JosefinSans_700Bold"
            }
          }} />
        {/*CourseDetails Screen*/}
        <Stack.Screen name='CourseDetails' component={CourseDetails}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: "Nunito_600SemiBold"
              fontFamily: "JosefinSans_700Bold"
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

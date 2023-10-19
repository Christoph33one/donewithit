import { TextInput, Text, Switch } from "react-native";

import Icon from "./app/components/Icon";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessagesScreen from "./app/screens/MessagesScreen";

import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>TweetsDetails</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// import * as Permissions from "expo-permissions";
// Taken from the example code in Expo imagePicker documentation
// const pickImage = async () => {
//   let result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 1,
//   });

//   if (!result.canceled) {
//     setImage(result.uri);
//   }
// };

// <LoginScreen />
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";
// <AppTextInput placeholder="Username" icon="email" />
// <ListingsScreen />
// <AccountScreen />
// <GestureHandlerRootView></GestureHandlerRootView>;
// <MessagesScreen />  import MessagesScreen from "./app/screens/MessagesScreen";
// <ViewImageScreen />;
// <ListingDetailsScreen />;  import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListItem from "./app/components/ListItem";
// <WelcomeScreen />;
// <ViewImageScreen />;
// import AppButton from "./app/components/AppButton";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
/* ----------------------------------------------------
 NOTES
 
 // STYLING
 <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizintal axis
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis align items on each line
        // alignContent: "center",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, // width or height
          // flexGrow: 1,
          // flexShrink: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          // top: 20,
          // left: 20,
          // position: "absolute", // By default all elements are positioned to relative!
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );

// LAYOUT 
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizintal axis
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignItems: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

Adding an image and giving it styles from a url
<SafeAreaView style={styles.container}>
  <Text>Hello React Native!</Text>
  <TouchableHighlight onPress={() => console.log("Image tapped")}>
    <Image
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }}
    />
  </TouchableHighlight>
</SafeAreaView>

Giving options when clicking on a button
<Button
color="orange"
title="Click Me!"
onPress={() =>
  Alert.alert("My title", "My message", [
    { text: "Yes", onPress: () => console.log("Clicked Yes") },
    { text: "No", onPress: () => console.log("Clicked No") },
  ])
}
></Button>

Using a callback function
<Button
color="orange"
title="Click Me!"
onPress={() =>
  Alert.prompt("My title", "My message", (text) => console.log(text))
}
></Button>
*/

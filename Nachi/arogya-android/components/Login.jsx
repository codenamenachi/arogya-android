import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  View,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/dev";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId: GOOGLE_WEB_CLIENT_ID,
//   androidClientId:
//     "571781050100-a53aask28iskelq9b8ob2ra5geipm0ht.apps.googleusercontent.com",
//   iosClientId:
//     "571781050100-a53aask28iskelq9b8ob2ra5geipm0ht.apps.googleusercontent.com",
//   scopes: ["profile", "email"],
// });

// const GoogleLogin = async () => {
//   await GoogleSignin.hasPlayServices();
//   const userInfo = await GoogleSignin.signIn();
//   return userInfo;
// };

const Login = ({ navigation }) => {
  useFonts({
    Caveat_400Regular,
  });
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleGoogleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await GoogleLogin();
  //     const { idToken, user } = response;

  //     if (idToken) {
  //       const resp = await authAPI.validateToken({
  //         token: idToken,
  //         email: user.email,
  //       });
  //       await handlePostLoginData(resp.data);
  //     }
  //   } catch (apiError) {
  //     setError(
  //       apiError?.response?.data?.error?.message || "Something went wrong"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const tempLogin = (e) => {
    e.preventDefault();
    alert("Logging in..");
    navigation.navigate("LandingPage", { name: "Dr Varsha" });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={require("../assets/Logo - tab title.png")}
        style={{ height: 170 }}
      /> */}
      <Text style={styles.appTitle}>Arogya</Text>
      <View
        style={{
          // width: 200,
          // height: 200,
          // backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "stretch",
          paddingTop: 100,
        }}
      >
        <TouchableNativeFeedback>
          <Button
            color=""
            title="Login with Google"
            onPress={() => navigation.navigate("Arogya", { name: "Jane" })}
          />
        </TouchableNativeFeedback>
      </View>
      {/* <Text>Open up App.js to start on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86d8b4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    // backgroundColor : "#111111",
  },
  appTitle: {
    // backgroundColor: "#fff",
    fontSize: 100,
    color: "#e2f0d9",
    fontFamily: "Caveat_400Regular",
    // textAlign: "justify",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
  },
});

export default Login;

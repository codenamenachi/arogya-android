import { React, useRef, createRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BackHandler,
  Button,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Ubuntu_500Medium } from "@expo-google-fonts/dev";

const LandingPage = () => {
  useFonts({
    Ubuntu_500Medium,
  });

  const drawer = useRef < DrawerLayoutAndroid > null;

  const navigationView = () => (
    <View>
      <Text>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => this.drawer.current?.closeDrawer()}
      />
    </View>
  );

  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.landingPage}>
        <View style={styles.landingHeader}>
          <View>
            <Image
              style={styles.stretch}
              source={require("../assets/Logo - tab title.png")}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Ubuntu_500Medium",
                fontSize: 30,
                width: 300,
                height: "auto",
                color: "#595959",
                backgroundColor: "#7ac6a4",
                flex: 2,
                flexWrap: "wrap",
                paddingLeft: 10,
                paddingTop: 5,
              }}
            >
              Welcome,{"\n"}Dr Varsha
            </Text>
          </View>
        </View>
        {/* <DrawerLayoutAndroid
          ref={this.drawer}
          drawerPosition="left"
          renderNavigationView={navigationView}
          backgroundColor="#fff"
        > */}
        <View
          style={{
            height: 50,
            width: "auto",
            backgroundColor: "#31664e",
            justifyContent: "center",
            alignContent: "flex-start",
            paddingStart: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              height: 30,
              width: 30,
              // justifyContent: "center",
              // alignContent: "stretch",
            }}
          >
            <View
              backgroundColor="#31664e"
              // backgroundColor="#fff"
              style={{
                height: 30,
                width: 30,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white" }}
                onPress={() => {
                  this.drawer.current?.openDrawer();
                }}
              >
                |||
              </Text>
            </View>
          </View>
        </View>
        {/* </DrawerLayoutAndroid> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  landingPage: {
    // flex: 1,
    // flexDirection: "column",
    // backgroundColor: "#7ac6a4",
    // alignItems: "center",
    // width: 100,
  },
  landingHeader: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "#7ac6a4",
    alignItems: "center",
    width: 100,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: "strech",
  },
});

export default LandingPage;

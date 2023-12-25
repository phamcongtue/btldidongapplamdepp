import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Image } from "react-native";
import { BRAND } from "../data/brand";
import { TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#ff6d6ddd", flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
            >
                <Image
                    source={require("../assets/logo/logo.png")}
                    style={{ alignSelf: "center", marginTop: 220 }}
                />
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    gap: 59,
                    position: "absolute",
                    bottom: 60,
                    alignSelf: "center",
                }}
            >
                {BRAND.map((brand, index) => (
                    <TouchableOpacity>
                        <Image
                            key={index}
                            source={brand.icon}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

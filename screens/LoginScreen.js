import {
    View,
    Text,
    ImageBackground,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { Image } from "react-native";

const LoginScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/logo/screen.png")}
            style={{ flex: 1 }}
        >
            <View style={{ marginHorizontal: 20, marginTop: 440 }}>
                <Text
                    style={{ fontSize: 44, fontWeight: "700", color: "#fff" }}
                >
                    Login
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 15,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "rgba(255, 255, 255, 0.60)",
                        }}
                    >
                        Email
                    </Text>
                    <TextInput
                        style={{
                            borderColor: "#fff",
                            borderWidth: 1,
                            width: "75%",
                            padding: 20,
                            borderRadius: 15,
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 30,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "rgba(255, 255, 255, 0.60)",
                        }}
                    >
                        Password
                    </Text>
                    <TextInput
                        style={{
                            borderColor: "#fff",
                            borderWidth: 1,
                            width: "75%",
                            padding: 20,
                            borderRadius: 15,
                        }}
                    />
                </View>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "700",
                        marginTop: 26,
                    }}
                >
                    Forgot Password?
                </Text>
                <View style={{ alignItems: "flex-end" }}>
                    <Pressable
                        style={{
                            paddingHorizontal: 35,
                            paddingVertical: 19,
                            borderWidth: 1,
                            borderColor: "#fff",
                            borderRadius: 10,
                        }}
                        onPress={() => navigation.navigate("MyTabs")}
                    >
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            Login
                        </Text>
                    </Pressable>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 40,
                    }}
                >
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Image
                            source={require("../assets/icon/facebook.png")}
                            style={{ width: 30, height: 30 }}
                        />
                        <Image
                            source={require("../assets/icon/google.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#fff",
                                width: 80,
                                textAlign: "center",
                            }}
                        >
                            New Here?{" "}
                            <Text style={{ fontWeight: "700" }}>Register</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

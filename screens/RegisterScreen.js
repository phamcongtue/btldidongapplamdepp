import {
    View,
    Text,
    ImageBackground,
    TextInput,
    Pressable,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";

const RegisterScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/logo/screen.png")}
            style={{ flex: 1 }}
        >
            <View style={{ marginHorizontal: 20, marginTop: 430 }}>
                <Text
                    style={{ fontSize: 44, fontWeight: "700", color: "#fff" }}
                >
                    Register
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
                        Full Name
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

                <View style={{ alignItems: "flex-end" }}>
                    <Pressable
                        style={{
                            paddingHorizontal: 35,
                            paddingVertical: 19,
                            borderWidth: 1,
                            borderColor: "#fff",
                            borderRadius: 10,
                            marginTop: 30,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            Register
                        </Text>
                    </Pressable>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#fff",
                                width: 120,
                                textAlign: "center",
                            }}
                        >
                            Already a Member?{" "}
                            <Text style={{ fontWeight: "700" }}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;

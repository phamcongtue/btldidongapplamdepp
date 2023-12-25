import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    Pressable,
} from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const OrderSuccessScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#FF6D6D99" }}>
            <SafeAreaView>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 15,
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../assets/icon/back.png")}
                            style={{ width: 36, height: 36 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/icon/view-all.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 0.6 * windowHeight,
                    }}
                >
                    <Image source={require("../assets/icon/success.png")} />
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "600",
                            color: "#FFFEFEC4",
                        }}
                    >
                        Order Succes
                    </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "600",
                            color: "#FFFEFEC4",
                            marginTop: 10,
                        }}
                    >
                        Thank you for your purchase!
                    </Text>
                </View>
                <Pressable
                    style={{
                        marginHorizontal: 20,
                        padding: 10,
                        backgroundColor: "#fff",
                        borderRadius: 5,
                    }}
                    onPress={() => navigation.navigate("MyTabs")}
                >
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: "600",
                            color: "#FF6D6DB2",
                            textAlign: "center",
                        }}
                    >
                        BACK TO HOME
                    </Text>
                </Pressable>
            </SafeAreaView>
        </View>
    );
};

export default OrderSuccessScreen;

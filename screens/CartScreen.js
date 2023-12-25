import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import Header from "../components/cart/Header";
import { Divider } from "react-native-elements";
import ContentCart from "../components/cart/ContentCart";

const CartScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <Divider />
            <ContentCart />
            <Divider />
            <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#5F5B5B",
                        }}
                    >
                        Items(3)
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#5F5B5B",
                        }}
                    >
                        $530
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#5F5B5B",
                        }}
                    >
                        Total discount
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#5F5B5B",
                        }}
                    >
                        $30
                    </Text>
                </View>
            </View>
            <Divider />
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#5F5B5B",
                        }}
                    >
                        Total payment
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#FF6D6DB2",
                        }}
                    >
                        $500
                    </Text>
                </View>
                <Pressable
                    style={{
                        padding: 10,
                        backgroundColor: "#FF6D6D99",
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                    onPress={() => navigation.navigate("Payment")}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "600",
                            color: "#fff",
                            textAlign: "center",
                        }}
                    >
                        CHECKOUT
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;

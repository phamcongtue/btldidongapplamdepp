import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { PRODUCTS } from "../../data/products";
import { Divider } from "react-native-elements";

const ContentCart = () => {
    return (
        <View>
            <ScrollView>
                {PRODUCTS.slice(0, 3).map((product, index) => (
                    <View>
                        <TouchableOpacity
                            key={index}
                            style={{
                                marginTop: 20,
                                marginHorizontal: 20,
                                marginBottom: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={product.image}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 15,
                                    borderWidth: 2,
                                    borderColor: "#ffd7d7",
                                }}
                            />
                            <View style={{ width: "70%" }}>
                                <Text
                                    style={{ fontSize: 18, fontWeight: "600" }}
                                >
                                    {product.name}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                color: "#5F5B5B",
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            Pink
                                        </Text>
                                        <Text
                                            style={{
                                                marginTop: 5,
                                                color: "#ff6d6d",
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            {product.price}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: 5,
                                            marginRight: 40,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: 6,
                                                backgroundColor: "#EFEFEF",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "#FB4949",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                        <Text
                                            style={{
                                                paddingHorizontal: 10,
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            1
                                        </Text>
                                        <TouchableOpacity
                                            style={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: 6,
                                                backgroundColor: "#FFD7D7",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "600",
                                                    color: "#fff",
                                                }}
                                            >
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Divider />
                    </View>
                ))}
            </ScrollView>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    width: "87%",
                    borderWidth: 1,
                    borderColor: "#6C6666",
                    borderRadius: 10,
                    alignSelf: "center",
                    marginTop: 55,
                    padding: 5,
                    marginBottom: 25,
                }}
            >
                <Image
                    source={require("../../assets/icon/voucher.png")}
                    style={{ width: 36, height: 36 }}
                />
                <Text
                    style={{
                        fontStyle: "italic",
                        fontSize: 16,
                        color: "#6C6666",
                    }}
                >
                    Add voucher
                </Text>
            </View>
        </View>
    );
};

export default ContentCart;

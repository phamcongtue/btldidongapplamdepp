import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
const windowHeight = Dimensions.get("window").height;

const ProductScreen = ({ route, navigation }) => {
    const { image, name, price } = route.params;
    const [count, setCount] = useState(1);
    return (
        <ImageBackground style={{ backgroundColor: "#FF6D6DB2", flex: 1 }}>
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
                        justifyContent: "center",
                        alignItems: "center",
                        height: 0.6 * windowHeight,
                    }}
                >
                    <Image
                        source={image}
                        style={{ width: 325, height: 450, borderRadius: 10 }}
                    />
                </View>
            </SafeAreaView>
            <View
                style={{
                    height: 230,
                    backgroundColor: "#fff",
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    borderRadius: 30,
                    padding: 25,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: "700" }}>
                            {name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#8b8b8b",
                                marginTop: 5,
                            }}
                        >
                            Tint color with strawberry
                        </Text>
                    </View>
                    <View style={{ marginRight: 25 }}>
                        <Text>⭐️⭐️⭐️⭐️⭐️</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#8b8b8b",
                                marginTop: 5,
                            }}
                        >
                            (1010 Reviews)
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >
                    <Text style={{ fontSize: 28, fontWeight: "800" }}>
                        {price}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 25,
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 99,
                        }}
                    >
                        <TouchableOpacity onPress={() => setCount(count - 1)}>
                            <Text style={{ fontSize: 18 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>{count}</Text>
                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <Text style={{ fontSize: 18 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ borderWidth: 2, padding: 5, borderRadius: 10 }}
                    >
                        <Image
                            source={require("../assets/icon/bag-black.png")}
                            style={{ width: 45, height: 45 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}
                        style={{
                            backgroundColor: "#000",
                            width: 55,
                            height: 55,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 22, color: "#fff" }}>Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ProductScreen;

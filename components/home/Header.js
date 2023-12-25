import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
    return (
        <View
            style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <TouchableOpacity>
                <Image
                    source={require("../../assets/icon/menu.png")}
                    style={{ width: 36, height: 36 }}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SearchScreen")}
                >
                    <Image
                        source={require("../../assets/icon/search.png")}
                        style={{ width: 36, height: 36 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                    <Image
                        source={require("../../assets/icon/bag.png")}
                        style={{ width: 36, height: 36 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

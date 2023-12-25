import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Header = ({ navigation }) => {
    return (
        <View
            style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 18,
            }}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../assets/icon/back.png")}
                    style={{ width: 36, height: 36 }}
                />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                Search Product
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
                <Image
                    source={require("../../assets/icon/bag.png")}
                    style={{ width: 36, height: 36 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

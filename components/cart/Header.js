import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
    return (
        <View
            style={{
                marginHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 40,
            }}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../assets/icon/back-black.png")}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 36, fontWeight: "500" }}>Cart</Text>
            <Image
                source={require("../../assets/icon/bag-black.png")}
                style={{ width: 36, height: 36 }}
            />
        </View>
    );
};

export default Header;

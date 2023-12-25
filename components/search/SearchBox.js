import { View, Text, TextInput, Image } from "react-native";
import React from "react";

const SearchBox = () => {
    return (
        <View
            style={{
                marginHorizontal: 20,
                flexDirection: "row",
                gap: 16,
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "#fff",
                    flexDirection: "row",
                    padding: 8,
                    borderRadius: 12,
                    width: "70%",
                }}
            >
                <Image
                    source={require("../../assets/icon/search1.png")}
                    style={{ width: 32, height: 32, marginRight: 10 }}
                />
                <TextInput
                    placeholderTextColor="#8E8E93"
                    placeholder="Search"
                    autoCapitalize="none"
                    keyboardType="default"
                    style={{ fontSize: 20, color: "#000", width: "80%" }}
                ></TextInput>
            </View>
            <View
                style={{
                    padding: 8,
                    backgroundColor: "#fff",
                    borderRadius: 12,
                }}
            >
                <Image
                    source={require("../../assets/icon/adjust.png")}
                    style={{ width: 32, height: 32 }}
                />
            </View>
        </View>
    );
};

export default SearchBox;

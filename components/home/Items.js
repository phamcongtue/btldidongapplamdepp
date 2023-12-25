import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ITEMS } from "../../data/items";
import { TouchableOpacity } from "react-native";
import { PRODUCTS } from "../../data/products";

const Items = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 30, marginLeft: 20 }}
        >
            {ITEMS.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                        borderWidth: 1,
                        marginRight: 20,
                        borderRadius: 25,
                        borderColor: "#fff",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 25, color: "#fff" }}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Items;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { PRODUCTS } from "../../data/products";

const Product = ({ navigation }) => {
    return (
        <View style={{ marginTop: 30, alignItems: "center" }}>
            {PRODUCTS.slice(0, 1).map((product, index) => (
                <TouchableOpacity
                    style={{ alignItems: "center" }}
                    key={index}
                    onPress={() =>
                        navigation.push("ProductScreen", {
                            image: product.image,
                            name: product.name,
                            price: product.price,
                        })
                    }
                >
                    <Image source={product.image} />
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: "700",
                            marginTop: 12,
                        }}
                    >
                        {product.name}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "300" }}>
                        {product.price}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Product;

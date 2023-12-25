import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
} from "react-native";
import React from "react";
import { PRODUCTS } from "../../data/products";
const windowWidth = Dimensions.get("window").width;

const SearchContent = ({ navigation }) => {
    return (
        <View
            style={{ marginHorizontal: 10, marginTop: 10, paddingBottom: 50 }}
        >
            <Text style={{ fontSize: 28, fontWeight: "700", color: "#fff" }}>
                Found 10 Results
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginTop: 10,
                    gap: 10,
                }}
            >
                {PRODUCTS.map((product, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: windowWidth * 0.44,
                            height: 270,
                            backgroundColor: "#fff",
                            borderRadius: 15,
                        }}
                        onPress={() =>
                            navigation.push("ProductScreen", {
                                image: product.image,
                                name: product.name,
                                price: product.price,
                            })
                        }
                    >
                        <Image
                            source={product.image}
                            style={{
                                width: windowWidth * 0.44,
                                height: 200,
                                borderRadius: 8,
                                resizeMode: "stretch",
                            }}
                        />
                        <View
                            style={{
                                marginHorizontal: 15,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                            }}
                        >
                            <View>
                                <Text style={styles.desc}>{product.name}</Text>
                                <Text style={styles.desc}>{product.price}</Text>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../assets/icon/heart-product.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    desc: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 10,
    },
});

export default SearchContent;

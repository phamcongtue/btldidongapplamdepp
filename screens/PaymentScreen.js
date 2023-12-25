import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Pressable,
    Alert
} from "react-native";
import React from "react";
import { PAYMENT } from "../data/pay";

const PaymentScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
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
                        source={require("../assets/icon/back-black.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 36, fontWeight: "600" }}>Payment</Text>
                <View style={{ width: 36, height: 36 }}></View>
            </View>
        
            {PAYMENT.map((pay, index) => (
               
                <TouchableOpacity
                
                    key={index}
                    style={{

                        flexDirection: "row",
                        alignItems: "center",
                        width: "76%",
                        alignSelf: "center",
                        borderWidth: 3,
                        borderColor: "#E5E5E5E5",
                        borderRadius: 8,
                        padding: 19,
                        gap: 20,
                        marginTop: 30,
                    }}
                     onPress={() => Alert.alert('Chọn phương thức thành công')}
                >
                    <Image source={pay.image} />
                    <Text style={{ fontSize: 22, fontWeight: "600" }}>
                        {pay.name}
                    </Text>
                </TouchableOpacity>
            ))}
            <Pressable
                style={{
                    backgroundColor: "#FF6D6D99",
                    marginTop: 320,
                    marginHorizontal: 20,
                    padding: 10,
                    borderRadius: 5,
                }}
                onPress={() => navigation.navigate("OrderSuccess")}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        color: "#fff",
                        textAlign: "center",
                    }}
                >
                    CONTINUE
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default PaymentScreen;

import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    Alert
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileScreen = ({navigation}) => {
    const LogoutButtonAlert = () =>
    Alert.alert('Thông báo', 'Bạn có muốn đăng xuất ?', [
       {
        text: 'Cancel',
        onPress: () =>{}
      },
      {text: 'OK',
     onPress: () => navigation.navigate('LoginScreen')},
     ]);
    return (
        
        <SafeAreaView>
            <View
                style={{
                    backgroundColor: "#ff6d6ddd",
                    height: 0.3 * windowHeight,
                    position: "relative",
                    paddingTop: 20,
                }}
            >
                <View
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require("../assets/icon/back.png")}
                            style={{ width: 36, height: 36 }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/profile/maihailan.jpeg")}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 999,
                            }}
                        />
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 24,
                                fontWeight: "700",
                                marginTop: 10,
                            }}
                        >
                            Mai Hải Lân
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                            @hailan123
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/icon/view-all.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        paddingVertical: 30,
                        width: 0.85 * windowWidth,
                        position: "absolute",
                        bottom: -55,
                        alignSelf: "center",
                        borderRadius: 10,
                    }}
                >
                    <TouchableOpacity  style={{ alignItems: "center" }} >
                        <Image
                            source={require("../assets/icon/bag-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderSuccess')} style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/heart-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>Favorite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/address-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/voucher-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>Voucher</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 100, alignItems: "center" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/Settings.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            Settings
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/Stack.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            Help
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/Bullhorn.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                        Contact Us
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                     <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/Logout.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            Log Out
                        </Text>
                    </View>
                    
                    <TouchableOpacity onPress={LogoutButtonAlert}>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                    </TouchableOpacity>
                   
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

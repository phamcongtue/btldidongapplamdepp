import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Items from "../components/home/Items";
import Product from "../components/home/Product";
import MostPopular from "../components/home/MostPopular";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#FF6D6DB2" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header navigation={navigation} />
                <Items />
                <Product navigation={navigation} />
                <MostPopular navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

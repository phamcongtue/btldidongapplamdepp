import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/search/Header";
import SearchBox from "../components/search/SearchBox";
import SearchContent from "../components/search/SearchContent";

const SearchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#FF6D6DB2" }}>
            <Header navigation={navigation} />
            <ScrollView>
                <SearchBox />
                <SearchContent navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;

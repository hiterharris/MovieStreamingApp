import React, { useRef } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { Header, NewSeason, Dots, ContinueWatching } from "../components"
import { COLORS } from "../constants"
import { ScrollView } from 'react-native-gesture-handler';

function Home({ navigation }) {
    const newSeasonScrollX = useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }} >
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <NewSeason newSeasonScrollX={newSeasonScrollX} navigation={navigation} />
                <Dots newSeasonScrollX={newSeasonScrollX} />
                <ContinueWatching />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

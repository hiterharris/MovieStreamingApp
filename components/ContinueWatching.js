import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import { ProgressBar } from "../components"
import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants"

function ContinueWatching() {
    return (
        <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            {/* Continue Watching */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                }}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h2 }}>Continue Watching</Text>

                <Image
                    source={icons.right_arrow}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.primary
                    }}
                />
            </View>

            {/* Continue Watching List */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                data={dummyData.continueWatching}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate("MovieDetail", { selectedMovie: item })}
                        >
                            <View
                                style={{
                                    marginLeft: index == 0 ? SIZES.padding : 20,
                                    marginRight: index == dummyData.continueWatching.length - 1 ? SIZES.padding : 0
                                }}
                            >
                                <Image
                                    source={item.thumbnail}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width / 3,
                                        height: (SIZES.width / 3) + 60,
                                        borderRadius: 20
                                    }}
                                />
                                <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h4 }}>{item.name}</Text>

                                <ProgressBar
                                    containerStyle={{
                                        marginTop: SIZES.radius
                                    }}
                                    barStyle={{
                                        height: 3,
                                    }}
                                    barPercentage={item.overallProgress}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
            />
        </View>
    )
}

export default ContinueWatching;

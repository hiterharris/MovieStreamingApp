import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
    Animated,
} from 'react-native';
import { Profiles } from "../components"
import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants"

const NewSeason = ({ newSeasonScrollX, navigation }) => {
    return (
        <Animated.FlatList
            horizontal
            pagingEnabled
            snapToAlignment="center"
            snapToInterval={SIZES.width}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={0}
            contentContainerStyle={{
                marginTop: SIZES.radius,
            }}
            data={dummyData.newSeason}
            keyExtractor={item => `${item.id}`}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: newSeasonScrollX } } }
            ], { useNativeDriver: false })}
            renderItem={({ item, index }) => {
                return (
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("MovieDetail", { selectedMovie: item })}
                    >
                        <View
                            style={{
                                width: SIZES.width,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ImageBackground
                                source={item.thumbnail}
                                resizeMode="cover"
                                style={{
                                    width: SIZES.width * 0.85,
                                    height: SIZES.width * 0.85,
                                    justifyContent: 'flex-end'
                                }}
                                imageStyle={{
                                    borderRadius: 40
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        height: 60,
                                        width: "100%",
                                        marginBottom: SIZES.radius,
                                        paddingHorizontal: SIZES.radius
                                    }}
                                >
                                    {/* Play Now */}
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 40,
                                                height: 40,
                                                borderRadius: 20,
                                                backgroundColor: COLORS.transparentWhite,
                                            }}
                                        >
                                            <Image
                                                source={icons.play}
                                                resizeMode="contain"
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                    tintColor: COLORS.white,
                                                }}
                                            />
                                        </View>

                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h3 }}>Play Now</Text>
                                    </View>
                                    {/* Still Watching */}
                                    {item.stillWatching.length > 0 &&
                                        <View style={{ justifyContent: 'center' }}>
                                            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Still Watching</Text>
                                            <Profiles
                                                profiles={item.stillWatching}
                                            />
                                        </View>
                                    }
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }}
        />
    )
}

export default NewSeason;

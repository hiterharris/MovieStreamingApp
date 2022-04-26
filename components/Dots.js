import React from 'react';
import { View, Animated } from 'react-native';
import { dummyData, COLORS, SIZES } from "../constants"

function Dots({ newSeasonScrollX }) {
    const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width)

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {dummyData.newSeason.map((item, index) => {

                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    })

                    const dotWidth = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [6, 20, 6],
                        extrapolate: "clamp"
                    })

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
                        extrapolate: "clamp"
                    })

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 3,
                                width: dotWidth,
                                height: 6,
                                backgroundColor: dotColor
                            }}
                        />
                    )
                })}
            </View>
        </View>
    )
}

export default Dots;

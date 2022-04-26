import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, icons, images } from "../constants"

const Header = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
            }}
        >
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                }}
                onPress={() => console.log('Profile')}
            >
                <Image
                    source={images.profile_photo}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: 50,
                }}
                onPress={() => console.log('Screen Mirror')}
            >
                <Image
                    source={icons.airplay}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
export default Header;

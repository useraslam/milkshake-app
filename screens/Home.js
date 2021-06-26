import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Animated,
  Image,
} from "react-native";
import { CustomButton, HeaderBar } from "../components";
import {
  constants,
  icons,
  dummyData,
  images,
  COLORS,
  SIZES,
  FONTS,
} from "../constants";
import { connect } from "react-redux";
import appTheme from "../constants/theme";

const promoTabs = constants.promoTabs;

const TabIndicator = () => {
  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: 100,
        left: 0,
        borderRadius: SIZES.radius * 5,
        backgroundColor: COLORS.primary,
      }}
    ></View>
  );
};

const Tabs = ({ appTheme }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: appTheme.tabBackgroundColor,
      }}
    >
      {/* Tab Indicator */}
      <TabIndicator />

      {/* Tabs */}
      {promoTabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`promoTab-${index}`}
            onPress={() => console.log(item)}
          >
            <View
              style={{
                paddingHorizontal: 15,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Home = ({ navigation, appTheme }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function renderAvailableRewards() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          height: 100,
        }}
        onPress={() => navigation.navigate("Rewards")}
      >
        {/* Reward Image */}
        <View
          style={{
            width: 100,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.pink,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          <ImageBackground
            source={icons.reward_cup}
            resizeMode="contain"
            style={{
              width: 85,
              height: 85,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 5,
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.transparentBlack,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                }}
              >
                400
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Rewared Details */}
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightPink,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: -5,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h2,
              fontSize: 20,
            }}
          >
            Available Rewards
          </Text>
          <View
            style={{
              marginTop: 5,
              padding: SIZES.base,
              borderRadius: SIZES.radius * 2,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              150 points - $2.50 off
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderPromoDeals() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {/* Header - Tabs */}
        <Tabs appTheme={appTheme} />

        {/* Details */}
        <Animated.FlatList
          data={dummyData.promos}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  width: SIZES.width,
                  paddingTop: SIZES.padding,
                }}
              >
                {/* Image */}
                <Image
                  source={images.strawberryBackground}
                  style={{
                    width: "100%",
                  }}
                  resizeMode="contain"
                />
                {/* Name */}
                <Text
                  style={{
                    color: COLORS.red,
                    ...FONTS.h2,
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>

                {/* Description */}
                <Text
                  style={{
                    color: appTheme.textColor,
                    ...FONTS.body4,
                    fontSize: 12,
                  }}
                >
                  {item.description}
                </Text>

                {/* Calories */}
                <Text
                  style={{
                    color: appTheme.textColor,
                    ...FONTS.body4,
                    fontSize: 12,
                  }}
                >
                  Calories: {item.calories}
                </Text>

                {/* Button */}
                <CustomButton
                  label="Order Now"
                  isPrimaryButton={true}
                  containerStyle={{
                    marginTop: 10,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.base,
                    borderRadius: SIZES.radius * 2,
                  }}
                  labelStyle={{
                    ...FONTS.h3,
                    fontSize: 14,
                  }}
                  onPress={() => navigation.navigate("Location")}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderBar />
      <ScrollView
        style={{
          flex: 1,
          marginTop: -25,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          backgroundColor: appTheme.backgroundColor,
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {/* Rewards */}
        {renderAvailableRewards()}
        {/* PromoSecion */}
        {renderPromoDeals()}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

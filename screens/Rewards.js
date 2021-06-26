import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { HeaderBar, CustomButton } from "../components";
import { dummyData, COLORS, FONTS, SIZES, icons, images } from "../constants";
import { connect } from "react-redux";

const Rewards = ({ navigation, appTheme }) => {
  function renderRewardPointSection() {
    return (
      <View
        style={{
          alignItems: "center",
          marginVertical: SIZES.padding,
        }}
      >
        {/* text */}
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h1,
            fontSize: 35,
          }}
        >
          Rewards
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: appTheme.textColor,
            width: SIZES.width * 0.6,
            textAlign: "center",
            ...FONTS.h3,
            lineHeight: 18,
          }}
        >
          You are 60 points away from your next reward{" "}
        </Text>

        {/* image */}
        <ImageBackground
          source={icons.reward_cup}
          resizeMode="contain"
          style={{
            marginTop: SIZES.padding,
            width: SIZES.width * 0.8,
            height: SIZES.width * 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.white,
              borderRadius: 40,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.primary,
              }}
            >
              280
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Scan Button */}
        <CustomButton
          isPrimaryButton={true}
          label="Scan in store"
          containerStyle={{
            width: 130,
            paddingVertical: 5,
            marginRight: SIZES.radius,
            borderRadius: SIZES.radius * 2,
          }}
          labelStyle={{
            ...FONTS.h3,
          }}
          onPress={() => navigation.navigate("Location")}
        />

        {/* Redeem Button */}
        <CustomButton
          isSecondaryButton={true}
          label="Redeem"
          containerStyle={{
            width: 130,
            paddingVertical: 5,
            borderRadius: SIZES.radius * 2,
          }}
          labelStyle={{
            ...FONTS.h3,
          }}
          onPress={() => navigation.navigate("Location")}
        />
      </View>
    );
  }

  function renderAvailableRewardsHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: appTheme.textColor,
            ...FONTS.h2,
          }}
        >
          availableRewards
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <HeaderBar />

      {/* Deatails */}
      <FlatList
        style={{
          marginTop: -25,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
          backgroundColor: appTheme.backgroundColor,
        }}
        data={dummyData.availableRewards}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Reward Pont Section */}
            {renderRewardPointSection()}
            {/* Button */}
            {renderButtons()}
            {/* Header Label */}
            {renderAvailableRewardsHeader()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.base,
                paddingVertical: SIZES.base,
                borderRadius: 20,
                backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
              }}
            >
              <Text
                style={{
                  color: item.eligible ? COLORS.black : COLORS.lightGray2,
                  ...FONTS.body3,
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 120,
            }}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default Rewards;

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);

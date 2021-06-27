import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";
import { IconButton, TabButton } from "../components";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Location = ({ navigation, appTheme }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  function renderHeader() {
    return (
      <SafeAreaView
        style={{
          height: 120,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            alignItems: "center",
          }}
        >
          {/* Back Button */}
          <IconButton
            icon={icons.leftArrow}
            onPress={() => navigation.goBack()}
          />
          {/* Title */}
          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h1,
                fontSize: 25,
              }}
            >
              Location
            </Text>
          </View>

          {/* Empty */}
          <View
            style={{
              width: 25,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  function renderTopBarSection() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TabButton
          label="Nearby"
          containerStyle={{
            width: 100,
          }}
          selected={selectedTab == 0}
          onPress={() => setSelectedTab(0)}
        />
        <TabButton
          label="Previous"
          containerStyle={{
            width: 100,
          }}
          selected={selectedTab == 1}
          onPress={() => setSelectedTab(1)}
        />
        <TabButton
          label="Favourite"
          containerStyle={{
            width: 100,
          }}
          selected={selectedTab == 2}
          onPress={() => setSelectedTab(2)}
        />
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          height: 50,
          paddingHorizontal: SIZES.padding,
          borderRadius: 24,
          backgroundColor: COLORS.lightGreen2,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 50,
            color: COLORS.black,
            ...FONTS.body4,
          }}
          placeholder="Enter your city, state or zip code"
          placeholderTextColor={COLORS.lightGray2}
        />

        <Image
          source={icons.search}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.lightGray2,
          }}
        />
      </View>
    );
  }

  function renderLocationList() {
    return (
      <FlatList
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
        data={dummyData.locations}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginBottom: SIZES.radius,
                borderRadius: SIZES.radius * 2,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                backgroundColor: appTheme.cardBackgroundColor,
              }}
              onPress={() =>
                navigation.navigate("Order", { selectedLocation: item })
              }
            >
              {/* Name & Bookmark */}
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: appTheme.textColor,
                    ...FONTS.h2,
                  }}
                >
                  {item.title}
                </Text>
                <Image
                  source={
                    item.bookmarked ? icons.bookmarkFilled : icons.bookmark
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: item.bookmarked
                      ? COLORS.primary
                      : COLORS.lightGray2,
                  }}
                />
              </View>
              {/* Address */}
              <View
                style={{
                  marginTop: SIZES.base,
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    color: appTheme.textColor,
                    ...FONTS.body4,
                  }}
                >
                  {item.address}
                </Text>
              </View>

              {/* Operation Hours */}
              <View
                style={{
                  marginTop: SIZES.base,
                }}
              >
                <Text
                  style={{
                    color: appTheme.textColor,
                    ...FONTS.body5,
                    lineHeight: 16,
                    fontSize: 10,
                  }}
                >
                  {item.operation_hours}
                </Text>
              </View>

              {/* Service */}

              <View
                style={{
                  flexDirection: "row",
                  marginTop: SIZES.base * 2,
                  marginBottom: SIZES.base / 2,
                }}
              >
                {/* PickUp */}
                <View
                  style={{
                    borderColor: appTheme.textColor,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      color: appTheme.textColor,
                      ...FONTS.body3,
                      fontSize: 12,
                    }}
                  >
                    Pick Up
                  </Text>
                </View>
                {/* Delivery */}
                <View
                  style={{
                    borderColor: appTheme.textColor,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: appTheme.textColor,
                      ...FONTS.body3,
                      fontSize: 12,
                    }}
                  >
                    Delivery
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Details */}
      <View
        style={{
          flex: 1,
          backgroundColor: appTheme.backgroundColor,
          marginTop: -20,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopLeftRadius: SIZES.radius * 2,
          padding: SIZES.padding,
        }}
      >
        {renderTopBarSection()}
        {renderSearchBar()}
        {renderLocationList()}
      </View>
    </View>
  );
};

// export default Location;

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);

// 149

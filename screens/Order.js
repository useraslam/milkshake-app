import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { dummyData, FONTS, COLORS, SIZES, icons } from "../constants";
import { IconButton, TabButton, VerticalTextButton } from "../components";
import { connect } from "react-redux";
import { ReactReduxContext } from "react-redux";
import { sin } from "react-native/Libraries/Animated/Easing";

const Order = ({ navigation, appTheme, route }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("Milk Tea");

  useEffect(() => {
    let { selectedLocation } = route.params;
    setSelectedLocation(selectedLocation);
  }, []);

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    let menuList = dummyData.menuList.filter(
      (menuItem) => menuItem.category == selectedCategory
    );
    setMenu(menuList);
  }, [selectedCategory]);

  function renderHeaderSection() {
    return (
      <SafeAreaView
        style={{
          height: 200,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navabar  */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            alignItems: "center",
          }}
        >
          <IconButton
            icon={icons.leftArrow}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              flex: 1,
              color: COLORS.white,
              ...FONTS.h1,
              fontSize: 25,
              textAlign: "center",
            }}
          >
            PIckup Order
          </Text>
          <View
            style={{
              width: 25,
            }}
          />
        </View>

        {/* Location */}
        <View
          style={{
            marginTop: SIZES.radius,
            backgroundColor: COLORS.white1,
            paddingHorizontal: SIZES.radius,
            paddingVertical: 5,
            borderRadius: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
          >
            {selectedLocation?.title}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  function renderTopBarSection() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          marginTop: SIZES.radius,
          justifyContent: "center",
          paddingLeft: SIZES.padding * 2,
          paddingRight: SIZES.padding,
        }}
      >
        {/* Tab Button */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TabButton
            containerStyle={{}}
            label="Menu"
            selected={selectedTab == 0}
            onPress={() => setSelectedTab(0)}
          />
          <TabButton
            containerStyle={{
              marginLeft: 20,
            }}
            label="Previous"
            selected={selectedTab == 1}
            onPress={() => setSelectedTab(1)}
          />
          <TabButton
            containerStyle={{
              marginLeft: 20,
            }}
            label="Favourite"
            selected={selectedTab == 2}
            onPress={() => setSelectedTab(2)}
          />
        </View>

        {/* Order Number */}
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            0
          </Text>
        </View>
      </View>
    );
  }

  function renderSideBar() {
    return (
      <View
        style={{
          width: 65,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 60,
          borderBottomRightRadius: 60,
          marginBottom: 10,
        }}
      >
        <VerticalTextButton
          label="Snack"
          selected={selectedCategory == "Snack"}
          onPress={() => setSelectedCategory("Snack")}
        />
        <VerticalTextButton
          label="Coffee"
          containerStyle={{
            marginTop: 40,
          }}
          selected={selectedCategory == "Coffee"}
          onPress={() => setSelectedCategory("Coffee")}
        />
        <VerticalTextButton
          label="Smoothie"
          containerStyle={{
            marginTop: 50,
            width: 100,
          }}
          selected={selectedCategory == "Smoothie"}
          onPress={() => setSelectedCategory("Smoothie")}
        />
        <VerticalTextButton
          label="Speacial Tea"
          containerStyle={{
            marginTop: 70,
            width: 100,
          }}
          selected={selectedCategory == "Special Tea"}
          onPress={() => setSelectedCategory("Special Tea")}
        />
        <VerticalTextButton
          label="Milk Tea"
          containerStyle={{
            marginTop: 70,
          }}
          selected={selectedCategory == "Milk Tea"}
          onPress={() => setSelectedCategory("Milk Tea")}
        />
      </View>
    );
  }

  function renderSideBarSection() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        {/* Side Bar */}
        {renderSideBar()}

        {/* Listing */}
        <FlatList
          contentContainerStyle={{
            marginTop: SIZES.padding,
          }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View
              style={{
                marginBottom: 50,
              }}
            />
          }
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("OrderDetail", { selectedItem: item })
                }
              >
                <View
                  style={{
                    height: 150,
                    paddingHorizontal: SIZES.padding,
                    marginTop: index > 0 ? 10 : 0,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* Thumbnail  */}
                  <View
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      width: 100,
                      height: 130,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: SIZES.radius,
                      backgroundColor: COLORS.lightYellow,
                      zIndex: 1,
                    }}
                  >
                    <Image
                      source={item.thumbnail}
                      resizeMode="contain"
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </View>
                  {/* Details */}
                  <View
                    style={{
                      width: "70%",
                      height: "85%",
                      backgroundColor: COLORS.primary,
                      borderRadius: SIZES.radius,
                      justifyContent: "space-between",
                      paddingLeft: "10%",
                      paddingRight: SIZES.base,
                      paddingVertical: SIZES.base * 3,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        fontSize: 16,
                        lineHeight: 20,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.lightYellow,
                        ...FONTS.h2,
                        fontSize: 16,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
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
      {/* HeaderSection */}
      {renderHeaderSection()}

      {/* Detail Section */}
      <View
        style={{
          flex: 1,
          backgroundColor: appTheme.backgroundColor,
          marginTop: -35,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* Tab Bar */}
        {renderTopBarSection()}
        {/* Side Bar */}
        {renderSideBarSection()}
      </View>
    </View>
  );
};

// export default Order;

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);

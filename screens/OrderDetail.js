import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import { dummyData, COLORS, FONTS, SIZES, icons } from "../constants";
import { IconButton } from "../components";
import { connect } from "react-redux";

const OrderDetail = ({ OrderDetail, navigation, route, appTheme }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(32);
  const [milkIndex, setMilkIndex] = useState(0);
  const [sweetnessLevel, setSweetnessLevel] = useState(50);
  const [IceLevel, setIceLevel] = useState(50);

  function milkButtonHandler(action) {
    if (action == "next" && milkIndex < dummyData.milkList.length - 1) {
      setMilkIndex(milkIndex + 1);
    } else if (action == "prev" && milkIndex > 0) {
      setMilkIndex(milkIndex - 1);
    }
  }

  function sweetnessLevelButtonHandler(action) {
    if (action == "+" && sweetnessLevel < 100) {
      setSweetnessLevel(sweetnessLevel + 25);
    } else if (action == "-" && sweetnessLevel > 0) {
      setSweetnessLevel(sweetnessLevel - 25);
    }
  }
  function IceLevelButtonHandler(action) {
    if (action == "+" && IceLevel < 100) {
      setIceLevel(IceLevel + 25);
    } else if (action == "-" && IceLevel > 0) {
      setIceLevel(IceLevel - 25);
    }
  }

  useEffect(() => {
    let { selectedItem } = route.params;
    setSelectedItem(selectedItem);
  }, []);

  function renderHeaderSection() {
    return (
      <View
        style={{
          width: "100%",
          height: "55%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 40,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 100,
          }}
        />
        <Image
          source={selectedItem?.thumbnail}
          resizeMode="contain"
          style={{ marginTop: 10 }}
        />
        <IconButton
          containerStyle={{
            position: "absolute",
            top: 45,
            left: 20,
            padding: 10,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.black,
          }}
          icon={icons.leftArrow}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  function renderDetailSection() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: "space-between",
        }}
      >
        {/* Name and Description */}
        <View>
          <Text
            style={{
              color: appTheme.headerColor,
              ...FONTS.h1,
              fontSize: 22,
            }}
          >
            {selectedItem?.name}
          </Text>
          <Text
            style={{
              color: appTheme.textColor,
              ...FONTS.body3,
            }}
          >
            {selectedItem?.description}
          </Text>
        </View>
        {/* Size */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          {/* Label */}
          <Text
            style={{
              color: appTheme.headerColor,
              ...FONTS.h2,
              fontSize: 18,
            }}
          >
            Pick A Size
          </Text>
          {/* Cup */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginRight: -20,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedSize(20)}
            >
              <ImageBackground
                source={icons.coffee_cup}
                style={{
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                imageStyle={{
                  tintColor: selectedSize == 20 ? COLORS.primary : COLORS.gray2,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}
                >
                  20oz
                </Text>
              </ImageBackground>
              <Text
                style={{
                  marginTop: 3,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                $4.50
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedSize(32)}
            >
              <ImageBackground
                source={icons.coffee_cup}
                style={{
                  width: 100,
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                imageStyle={{
                  tintColor: selectedSize == 32 ? COLORS.primary : COLORS.gray2,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}
                >
                  32oz
                </Text>
              </ImageBackground>
              <Text
                style={{
                  marginTop: 3,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                $5.00
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Milk, Sweetness and Ice */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
            paddingHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          {/* Milk */}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: appTheme.headerColor,
                ...FONTS.h2,
                fontSize: 20,
              }}
            >
              Milk
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: 100,
                height: 100,
                marginTop: SIZES.base,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
            >
              <IconButton
                icon={icons.leftArrow}
                containerStyle={{
                  marginLeft: -10,
                  width: 25,
                  height: 25,
                  borderRadius: 3,
                  backgroundColor: COLORS.white,
                }}
                iconStyle={{
                  width: 15,
                  height: 15,
                  tintColor: COLORS.black,
                }}
                onPress={() => milkButtonHandler("prev")}
              />
              <Image
                source={dummyData.milkList[milkIndex].image}
                resizeMode="contain"
                style={{
                  flex: 1,
                  width: 70,
                  height: 70,
                  tintColor: COLORS.white,
                }}
              />
              <IconButton
                icon={icons.rightArrow}
                containerStyle={{
                  marginRight: -10,
                  width: 25,
                  height: 25,
                  borderRadius: 3,
                  backgroundColor: COLORS.white,
                }}
                iconStyle={{
                  width: 15,
                  height: 15,
                  tintColor: COLORS.black,
                }}
                onPress={() => milkButtonHandler("next")}
              />
            </View>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {dummyData.milkList[milkIndex].name}
            </Text>
          </View>

          {/* Sweetness & Ice Section  */}
          <View style={{}}>
            {/* Sweetness */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingHorizont: SIZES.padding,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: appTheme.headerColor,
                  ...FONTS.h2,
                  fontSize: 20,
                }}
              >
                Sweetness
              </Text>
              <View
                style={{
                  marginTop: SIZES.base,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60%",
                  width: 100,
                  borderRadius: 15,
                  backgroundColor: COLORS.primary,
                }}
              >
                <IconButton
                  icon={icons.leftArrow}
                  containerStyle={{
                    marginLeft: -10,
                    width: 25,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: COLORS.white,
                  }}
                  iconStyle={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.black,
                  }}
                  onPress={() => sweetnessLevelButtonHandler("-")}
                />
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h2,
                    }}
                  >
                    {sweetnessLevel}%
                  </Text>
                </View>
                <IconButton
                  icon={icons.rightArrow}
                  containerStyle={{
                    marginRight: -10,
                    width: 25,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: COLORS.white,
                  }}
                  iconStyle={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.black,
                  }}
                  onPress={() => sweetnessLevelButtonHandler("+")}
                />
              </View>
            </View>
            {/* Ice */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingHorizont: SIZES.padding,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: appTheme.headerColor,
                  ...FONTS.h2,
                  fontSize: 20,
                }}
              >
                Ice
              </Text>
              <View
                style={{
                  marginTop: SIZES.base,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60%",
                  width: 100,
                  borderRadius: 15,
                  backgroundColor: COLORS.primary,
                }}
              >
                <IconButton
                  icon={icons.leftArrow}
                  containerStyle={{
                    marginLeft: -10,
                    width: 25,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: COLORS.white,
                  }}
                  iconStyle={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.black,
                  }}
                  onPress={() => IceLevelButtonHandler("-")}
                />
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h2,
                    }}
                  >
                    {IceLevel}%
                  </Text>
                </View>
                <IconButton
                  icon={icons.rightArrow}
                  containerStyle={{
                    marginRight: -10,
                    width: 25,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: COLORS.white,
                  }}
                  iconStyle={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.black,
                  }}
                  onPress={() => IceLevelButtonHandler("+")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme.backgroundColor,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingBottom: 150,
        }}
      >
        {/* HeaderSection */}
        {renderHeaderSection()}

        {/* Details Section */}
        {renderDetailSection()}
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);

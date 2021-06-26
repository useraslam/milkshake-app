import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";
import { connect } from "react-redux";
import { toggleTheme } from "../stores/themeActions";

const HeaderBar = ({ appTheme, toggleTheme }) => {
  function toggleThemHandler() {
    if (appTheme.name == "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  }

  return (
    <SafeAreaView
      style={{
        height: 150,
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Greetings */}
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Suresh,
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Welcome Back!
        </Text>
      </View>

      {/* ToggleButton */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.padding,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightPurple,
        }}
        onPress={() => toggleThemHandler()}
      >
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(appTheme.name == "light" ? styles.selectedDayModeStyle : {}),
          }}
        >
          <Image
            source={icons.sunny}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(appTheme.name == "dark" ? styles.selectedNightModeStyle : {}),
          }}
        >
          <Image
            source={icons.night}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedDayModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});

// export default HeaderBar;s

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

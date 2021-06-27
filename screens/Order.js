import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { dummyData, FONTS, COLORS, SIZES, icons } from "../constants";
import { IconButton, TabButton } from "../components";
import { connect } from "react-redux";

const Order = ({ navigation }) => {
  return <View></View>;
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

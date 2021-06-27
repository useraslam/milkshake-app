import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const VerticalTextButton = ({ containerStyle, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        transform: [{ rotate: "-90deg" }],
        ...containerStyle,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: selected ? COLORS.white : COLORS.lightGreen,
          ...FONTS.body2,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default VerticalTextButton;

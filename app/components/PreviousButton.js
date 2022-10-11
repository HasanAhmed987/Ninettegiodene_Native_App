import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

function PreviousButton(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <AntDesign
        name="arrowleft"
        size={30}
        color={colors.black}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrow: {
    marginTop: 40,
    marginLeft: 15,
  },
});

export default PreviousButton;
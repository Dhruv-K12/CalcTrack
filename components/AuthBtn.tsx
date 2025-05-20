import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type props = {
  colors?: [string, string];
  children: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
};
const AuthBtn = ({
  colors,
  children,
  onPress,
  style,
}: props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {colors !== undefined ? (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          colors={colors}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>{children}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.btnText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  btnText: {
    fontSize: 30,
    fontWeight: "200",
  },
});

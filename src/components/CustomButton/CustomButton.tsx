import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface CustumButtonInterface {
  title: string;
  color: string;
  onPress: () => void;
}

export function CustomButton({ title, color, onPress }: CustumButtonInterface) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#FFE800",
    shadowColor: "#FFE800",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
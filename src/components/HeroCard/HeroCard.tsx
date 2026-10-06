import { Image, StyleSheet, Text, View } from "react-native";

export function HeroCard({ name, classe }: { name: string; classe: string }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={require('@/assets/image.png')}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.classe}>{classe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#121212", 
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFE800", 
    padding: 12,
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFE800", 
    borderWidth: 1,
    borderColor: "#000000",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFE800", 
    textTransform: "capitalize",
  },
  classe: {
    fontSize: 14,
    color: "#D1D1D1", 
    fontWeight: "500",
    textTransform: "uppercase",
    marginTop: 2,
  },
});
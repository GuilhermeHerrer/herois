import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomModal } from "@/components/CustomModal/CustomModal";
import { HeroCard } from "@/components/HeroCard/HeroCard";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface Card {
  name: string;
  classe: string;
}

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [classe, setClasse] = useState("");
  const [name, setName] = useState("");
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<boolean>(false);

  const closeModal = () => {
    setName("");
    setClasse("");
    setError(false);
    setModal(false);
  };

  const criarCard = () => {
    if (classe == "" || name === "") {
      setError(true);
      return;
    }

    const objeto = {
      classe: classe,
      name: name,
    };

    closeModal();
    setCards([...cards, objeto]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Criador de Heróis</Text>
      </View>

      <ScrollView style={styles.cardList}>
        {cards.length === 0 ? (
          <Text style={{ color: "#FFF", textAlign: "center" }}>Nenhum herói criado ainda.</Text>
        ) : (
          cards.map((card, index) => (
            <View key={index} style={styles.cardContainer}>
              <HeroCard name={card.name} classe={card.classe} />
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton title="+ Novo Personagem" color="#FFE800" onPress={() => setModal(true)} />
        <CustomModal
          classe={setClasse}
          name={setName}
          visible={modal}
          save={criarCard}
          close={closeModal}
          error={error}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    paddingHorizontal: 20,
    paddingTop: 60,
    fontFamily: "Inter_400Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: "#FFE800",
    paddingBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FFE800",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontFamily: "Inter_700Bold",
  },
  cardList: {
    flex: 1,
    gap: 12,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFE800",
    padding: 4,
    shadowColor: "#FFE800",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  footer: {
    paddingVertical: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

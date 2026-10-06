import { Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { CustomButton } from "../CustomButton/CustomButton";

interface CustomModalInterface {
  visible: boolean;
  save: () => void;
  close: () => void;
  name: (t: string) => void;
  classe: (t: string) => void;
  error: boolean;
}

export function CustomModal({ save, visible, close, name, classe, error }: CustomModalInterface) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={close}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.closeButtonContainer}>
            <CustomButton title="X" color="#FFE800" onPress={close} />
          </View>

          <Image style={styles.image} 
            source={require('@/assets/image.png')}
          />

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={name}
                placeholderTextColor="#777777"
                placeholder="Nome do herói"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Classe</Text>
              <TextInput
                style={styles.input}
                onChangeText={classe}
                placeholderTextColor="#777777"
                placeholder="Ex: Guerreiro, Mago..."
              />
            </View>
          </View>

          {error ? <Text style={styles.errorMessage}>Há campos em branco!</Text> : null}
          <CustomButton title="Salvar e sair" color="#FFE800" onPress={save} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#121212",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFE800",
    padding: 20,
    alignItems: "center",
    shadowColor: "#FFE800",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  closeButtonContainer: {
    alignSelf: "flex-start",
    width: 45,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFE800",
    borderWidth: 2,
    borderColor: "#000000",
    marginVertical: 10,
  },
  form: {
    width: "100%",
    marginVertical: 15,
    gap: 15,
  },
  inputGroup: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFE800",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderColor: "#FFE800",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorMessage: {
    color: "#d80000",
    fontSize: 15,
    marginBottom: 10,
  },
});

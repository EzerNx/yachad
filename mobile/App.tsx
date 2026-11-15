import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type CarteVersetProps = {
  reference: string;
  texte: string;
};

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Yachad</Text>
      <CarteVerset
        reference="Psaume 121:2"
        texte="Mon secours vient de l'Éternel,Qui a fait les cieux et la terre."
      />
      <CarteVerset
        reference="Galates 6:2"
        texte="Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ."
      />
      <StatusBar style="auto" />
    </View>
  );
}

function CarteVerset(props: CarteVersetProps) {
  return (
    <View style={styles.carte}>
      <Text style={styles.reference}>{props.reference}</Text>
      <Text style={styles.texte}>{props.texte}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: "#f5f1ea",
    padding: 24,
    paddingTop: 80,
  },
  titre: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  carte: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  reference: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  texte: {
    fontSize: 16,
    lineHeight: 24,
  },
});

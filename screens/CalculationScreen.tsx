import { Text, View } from '../components/Themed';
import { CalculationStackScreenProps } from '../types';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as calcolaService from '../api/CalcolaServices'
import globalVariables from '../constants/Config'
import { Input, Icon } from '@rneui/themed';
import {
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function InserisciModelloScreen({ navigation }: CalculationStackScreenProps<'InserisciModello'>) {
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [spinner, setSpinner] = useState(false);
  async function InserisciModelloClicked() {
    var input = {
      titolo:titolo,
      descrizione:descrizione
    }
    var res = await calcolaService.InsertNewModel(input);
    if(res.Result){
      //GO TO NEXT PAGE
    }
    setSpinner(false);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ width: '100%', marginTop: 50 }}>
        <Text style={{ fontSize: 22,fontWeight:'bold', marginBottom: 80 }}>Descrizione inserisici modello*</Text>
        <Input
          style={styles.TextInput}
          placeholder="Titolo"
          placeholderTextColor="#003f5c"
          onChangeText={(titolo) => setTitolo(titolo)}
        />
        <Input
          style={styles.TextInput}
          placeholder="Descrizione"
          numberOfLines={4}
          multiline={true}
          placeholderTextColor="#003f5c"
          onChangeText={(desc) => setDescrizione(desc)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={InserisciModelloClicked}>
        <Text style={styles.loginText}>Avanti</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  loginText: {
    color:'white',
    fontSize:18
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "white",
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  register_button: {
    height: 50,
    fontSize: 18,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
  },
});
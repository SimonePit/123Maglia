import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import globalVariables from '../constants/Config'
import { Input, Icon } from '@rneui/themed';
import {
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import {DoLogin} from '../api/LoginService';

export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner,setSpinner]=useState(false);
  async function loginPressed () {
    if (email != '' && password != '') {
      setSpinner(true);
        var res = await DoLogin(email, password);
        console.log("RES LOGIN: " + res)
        if (!res.result) {
            Alert.alert("Attenzione", res.msg);
        }
        else {
            //StoreCredential(this.state.username, this.state.password, this.state.rememberCredential);
            globalVariables.IS_LOGGED_IN = true;
            globalVariables.Username = email;
            navigation.navigate("StackCalculation");
        }
    }
    else {
        Alert.alert("Attenzione", "Inserire le credenziali di accesso");
    }
    setSpinner(false);
}
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/logo.jpg")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Input
          style={styles.TextInput}
          leftIcon={
            <Icon
              name='mail-open-outline'
              type='ionicon'
              size={24}
              color='black'
            />}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <Input
          style={styles.TextInput}
          leftIcon={
            <Icon
              name='lock-closed-outline'
              type='ionicon'
              size={24}
              color='black'
            />}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={loginPressed}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:15}} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.register_button}>Non sei ancora registrato? Registrati ora!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 loginText:{

 },
  image: {
    width:150,
    height:150,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "white",
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
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
    fontSize:18,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0066ff",
  },
});
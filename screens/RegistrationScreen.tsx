import { Text, View, } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { RegisterUser } from '../api/RegistrationService';
import { StatusBar } from "expo-status-bar";
import { createRef, useRef, useState } from "react";
import { ScrollView, Alert } from 'react-native'
import { Input, Icon } from '@rneui/themed';
import {
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
} from "react-native";

export default function RegistrationScreen({ navigation }: RootStackScreenProps<'Registration'>) {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [dataNascita, setDataNascita] = useState("");
    const [indirizzo, setIndirizzo] = useState("");
    const [numeroTel, setNumeroTel] = useState("");
    const [codFiscale, setCodFiscale] = useState("");

    async function DoRegistration() {
        if (password === confPassword) {
            var jsonInput = {
                "nome": nome,
                "cognome": cognome,
                "email": email,
                "pwd": password,
                "telefono": numeroTel,
                "codFiscale": codFiscale,
                "indirizzo": indirizzo
            }
            var res = await RegisterUser(jsonInput);
            if (res.Result) {
                Alert.alert("Conferma", "Registrazione avvenuta con successo riceverai una mail con i dettagli");
                navigation.goBack();
            }
            else {
                Alert.alert("Errore", res.msg);
            }
        }
        else {
            Alert.alert("Errore", "Le password inserite non corrispondono");
        }

    }
    const inputCognome = useRef(null);
    const inputEmail = useRef(null);
    const inputTel = useRef(null);
    const inputCodFisc = useRef(null);
    const inputAddress = useRef(null);
    const inputPsw = useRef(null);
    const inputConfPas = useRef(null);
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Registrati</Text>
            </View>
            <ScrollView style={styles.inputView}>
                <Input
                    style={styles.TextInput}
                    autoFocus={true}
                    leftIcon={
                        <Icon
                            name='user'
                            type='antdesign'
                            size={24}
                            color='black'
                        />}
                    placeholder="Nome"
                    placeholderTextColor="#003f5c"
                    onChangeText={(nome) => setNome(nome)}
                    returnKeyType={"next"}
                    // onEndEditing={() => {
                    //     // @ts-ignore
                    //     inputCognome.current.focus();
                    // }}
                />
                <Input
                    ref={inputCognome}
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='user'
                            type='antdesign'
                            size={24}
                            color='black'
                        />}
                    placeholder="Cognome"
                    placeholderTextColor="#003f5c"
                    onChangeText={(cognome) => setCognome(cognome)}
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputEmail.current.focus()
                    // }}
                />
                <Input
                    ref={inputEmail}
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
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputTel.current.focus()
                    // }}
                />
                <Input
                    ref={inputTel}
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='smartphone'
                            type='materialIcons'
                            size={24}
                            color='black'
                        />}
                    placeholder="Numero di telefono"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setNumeroTel(str)}
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputCodFisc.current.focus()
                    // }}
                />
                <Input
                    ref={inputCodFisc}
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='user'
                            type='antdesign'
                            size={24}
                            color='black'
                        />}
                    placeholder="Codice Fiscale"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setCodFiscale(str)}
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputAddress.current.focus()
                    // }}
                />
                <Input
                    ref={inputAddress}
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='home'
                            type='antdesign'
                            size={24}
                            color='black'
                        />}
                    placeholder="Indirizzo"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setIndirizzo(str)}
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputPsw.current.focus()
                    // }}
                />
                <Input
                    ref={inputPsw}
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
                    returnKeyType={"next"}
                    // onBlur={() => {
                    //     // @ts-ignore
                    //     inputConfPas.current.focus()
                    // }}
                />
                <Input
                    ref={inputConfPas}
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='lock-closed-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Conferma password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setConfPassword(password)}
                    returnKeyType={"go"}
                />
            </ScrollView>

            <TouchableOpacity style={styles.loginBtn} onPress={DoRegistration}>
                <Text>Registrati</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    LoginText: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "white",
        width: "90%",
        marginBottom: 20,
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
        fontSize: 18,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: "#0066ff",
    },
});
import { Text, View, } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import {RegisterUser} from '../api/RegistrationService';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from 'react-native'
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

    async function DoRegistration(){
        var jsonInput = {
            "nome":nome,
            "cognome":cognome,
            "email":email,
            "pwd":password,
            "telefono":numeroTel,
            "codFiscale":codFiscale,
            "indirizzo":indirizzo
        }
        var res = await RegisterUser(jsonInput);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/logo.jpg")} />
            <ScrollView style={styles.inputView}>
                <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='mail-open-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Nome"
                    placeholderTextColor="#003f5c"
                    onChangeText={(nome) => setNome(nome)}
                />
                <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='mail-open-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Cognome"
                    placeholderTextColor="#003f5c"
                    onChangeText={(cognome) => setCognome(cognome)}
                />
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
                <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='mail-open-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Numero di telefono"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setNumeroTel(str)}
                />
                <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='mail-open-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Codice Fiscale"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setCodFiscale(str)}
                />
                <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon
                            name='mail-open-outline'
                            type='ionicon'
                            size={24}
                            color='black'
                        />}
                    placeholder="Indirizzo"
                    placeholderTextColor="#003f5c"
                    onChangeText={(str) => setIndirizzo(str)}
                />
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
                <Input
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
            />
            </ScrollView>

            <TouchableOpacity style={styles.loginBtn} onPress={DoRegistration}>
                <Text style={styles.loginText}>Registrati</Text>
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
    loginText: {

    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "white",
        width: "70%",
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
        marginTop: 40,
        backgroundColor: "#0066ff",
    },
});
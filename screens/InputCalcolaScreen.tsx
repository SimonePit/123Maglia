import { Text, View } from '../components/Themed';
import { CalculationStackScreenProps, DataInputCalcola } from '../types';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as calcolaService from '../api/CalcolaServices'
import globalVariables from '../constants/Config'
import { Input, Icon } from '@rneui/themed';
import { ScrollView } from 'react-native';
import {
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
} from "react-native";

export default function InputCalcolaScreen({ navigation, route }: CalculationStackScreenProps<'Calculation'>) {
    const idCM = route.params.idCM;
    const [CampioneFerri, setCampioneFerri] = useState("");
    const [MisuraAltezza, setMisuraAltezza] = useState("");
    const [MisuraManica, setMisuraManica] = useState("");
    const [MisuraSpalle, setMisuraSpalle] = useState("");
    const [MisuraTorace, setMisuraTorace] = useState("");
    const [NrFerriCampione, setNrFerriCampione] = useState("");
    const [NrPuntiCampione, setNrPuntiCampione] = useState("");
    const [spinner, setSpinner] = useState(false);

    async function Calcola() {
        var input: DataInputCalcola = {
            idCM: idCM.toString(),
            CampioneFerri: CampioneFerri,
            MisuraAltezza: MisuraAltezza,
            MisuraManica: MisuraManica,
            MisuraSpalle: MisuraSpalle,
            MisuraTorace: MisuraTorace,
            NrFerriCampione: NrFerriCampione,
            NrPuntiCampione: NrPuntiCampione
        }
        var res = await calcolaService.CalcolaModello(input);
        setSpinner(false);
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={{width:'90%'}}>
                <View style={{alignItems:'center'}}>
                <Text style={{ fontSize: 22, fontWeight: 'bold',marginBottom:15 }}>Inserisci i dati del campione*</Text>
                    <Input
                        style={styles.TextInput}
                        placeholder="Campione ferri"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setCampioneFerri(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Misura altezza"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraAltezza(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Misura manica"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraManica(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Misura spalle"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraSpalle(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Misura torace"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraTorace(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Numero ferri campione"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setNrFerriCampione(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Numero punti campione"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setNrPuntiCampione(ferr)}
                    />
                <TouchableOpacity style={styles.loginBtn} onPress={Calcola}>
                    <Text style={styles.loginText}>Calcola ora</Text>
                </TouchableOpacity>
                </View>
                    
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    loginText: {
        color: 'white',
        fontSize: 18
    },

    TextInput: {
        marginBottom:10
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
        marginBottom:15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0066ff",
    },
});
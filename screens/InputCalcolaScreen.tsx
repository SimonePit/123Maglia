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
    const [inCampioneFerri, setCampioneFerri] = useState("5");
    const [inMisuraAltezza, setMisuraAltezza] = useState("");
    const [inMisuraManica, setMisuraManica] = useState("");
    const [inMisuraSpalle, setMisuraSpalle] = useState("");
    const [inMisuraTorace, setMisuraTorace] = useState("");
    const [inNrFerriCampione, setNrFerriCampione] = useState("");
    const [inFerriCampioneCm, setFerriCampioneCm] = useState("");
    const [inNrPuntiCampione, setNrPuntiCampione] = useState("");
    const [inPuntiCampioneCm, setPuntiCampioneCm] = useState("");
    const [spinner, setSpinner] = useState(false);

    async function Calcola() {
        var input: DataInputCalcola = {
            idCM: idCM.toString(),
            inCampioneFerri: inCampioneFerri,
            inMisuraAltezza: inMisuraAltezza,
            inMisuraManica: inMisuraManica,
            inMisuraSpalle: inMisuraSpalle,
            inMisuraTorace: inMisuraTorace,
            inNrFerriCampione: inNrFerriCampione,
            inFerriCampioneCm: inFerriCampioneCm,
            inNrPuntiCampione: inNrPuntiCampione,
            inPuntiCampioneCm: inPuntiCampioneCm
        }
        var res = await calcolaService.CalcolaModello(input);
        setSpinner(false);
        if(res.Result == 'OperationSuccess'){
            navigation.navigate('OutputCalculation', {
                    Torace: res.Torace,
                    ToraceDavanti: res.ToraceDavanti,
                    ToraceDietro: res.ToraceDietro,
                    Spalle: res.Spalle,
                    PuntiCalareScalfo: res.PuntiCalareScalfo,
                    PuntiCalareScalfoDx: res.PuntiCalareScalfoDx,
                    PuntiCalareScalfoSx: res.PuntiCalareScalfoSx,
                    StrPuntiCalareScalfoLato:res.StrPuntiCalareScalfoLato,
                    ScolloCentrale: res.ScolloCentrale,
                    ScolloLaterale: res.ScolloLaterale,
                    GiroManica: res.GiroManica,
                    InclinaturaSpalleCentrale: res.InclinaturaSpalleCentrale,
                    InclinaturaSpalleLaterale: res.InclinaturaSpalleLaterale,
            });
          }
          else{
            Alert.alert("Attenzione", res.msg);
          }
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={{width:'90%'}}>
                <View style={{alignItems:'center', marginBottom:10}}>
                    <View style={{flexDirection: 'row', marginBottom:5}}>
                        <Icon
                        name='options-outline'
                        type='ionicon'
                        size={48}
                        color='black'
                        />
                        <Text style={{ fontSize: 22, fontWeight: 'bold',marginLeft:5, marginBottom:15 , marginTop:10}}>Inserisci i dati del campione*</Text>
                    </View>
                   {/* <Input
                        style={styles.TextInput}
                        placeholder="Campione ferri"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setCampioneFerri(ferr)}
                    /> */}
                     <Input
                        style={styles.TextInput}
                        leftIcon={
                            <Icon 
                              name='arrow-up'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        placeholder="Misura altezza in cm"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraAltezza(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        leftIcon={
                            <Icon 
                              name='git-merge-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        placeholder="Misura manica in cm"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraManica(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        leftIcon={
                            <Icon 
                              name='git-network-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        placeholder="Misura spalle in cm"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraSpalle(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        leftIcon={
                            <Icon 
                              name='barbell-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        placeholder="Misura torace in cm"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setMisuraTorace(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        leftIcon={
                            <Icon 
                              name='close-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        placeholder="Numero ferri campione"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setNrFerriCampione(ferr)}
                    />
                    <Input
                    style={styles.TextInput}
                    leftIcon={
                        <Icon 
                          name='close-outline'
                          type='ionicon'
                          size={24}
                          color='black'
                        />}
                    placeholder="Campione ferri cm"
                    keyboardType='number-pad'
                    placeholderTextColor="#003f5c"
                    onChangeText={(ferr) => setFerriCampioneCm(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Numero punti campione"
                        leftIcon={
                            <Icon 
                              name='ellipsis-vertical'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setNrPuntiCampione(ferr)}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder="Punti campione cm"
                        leftIcon={
                            <Icon 
                              name='ellipsis-vertical'
                              type='ionicon'
                              size={24}
                              color='black'
                            />}
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setPuntiCampioneCm(ferr)}
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
        marginBottom:10,
        marginLeft: 10,
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
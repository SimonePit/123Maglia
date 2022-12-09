import { Text, View } from '../components/Themed';
import { CalculationStackScreenProps, DataInputCalcola } from '../types';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Input, Icon } from '@rneui/themed';
import { ScrollView } from 'react-native';
import {
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
} from "react-native";

export default function OutputCalcolaScreen({ navigation, route }: CalculationStackScreenProps<'OutPutCalculation'>) {
    const outTorace = route.params.Torace;
    const outToraceDavanti = route.params.ToraceDavanti;
    const outToraceDietro = route.params.ToraceDietro;
    const outSpalle = route.params.Spalle;
    const outPuntiCalareScalfo = route.params.PuntiCalareScalfo;
    const outPuntiCalareScalfoDx = route.params.PuntiCalareScalfoDx;
    const outPuntiCalareScalfoSx = route.params.PuntiCalareScalfoSx;
    const outStrPuntiCalareScalfoLato = route.params.StrPuntiCalareScalfoLato;
    const outScolloCentrale = route.params.ScolloCentrale;
    const outScolloLaterale = route.params.ScolloLaterale;
    const outGiroManica = route.params.GiroManica;
    const outInclinaturaSpalleCentrale = route.params.InclinaturaSpalleCentrale;
    const outInclinaturaSpalleLaterale = route.params.InclinaturaSpalleLaterale;
    const [spinner, setSpinner] = useState(false);
    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={{width:'90%'}}>
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection: 'row', marginBottom:20, }}>
                        <Icon
                        name='ios-shirt-outline'
                        type='ionicon'
                        size={48}
                        color='black'
                        />
                        <Text style={{ fontSize: 22, fontWeight: 'bold',marginLeft:20, marginBottom:15 , marginTop:5 }}>Risultato misure</Text>
                    </View>
                   {/* <Input
                        style={styles.TextInput}
                        placeholder="Campione ferri"
                        keyboardType='number-pad'
                        placeholderTextColor="#003f5c"
                        onChangeText={(ferr) => setCampioneFerri(ferr)}
                    /> */}
                        <View style={styles.ViewDataRow}>
                            <Icon style = {styles.IconDataStyle}
                              name='barbell-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                             <View style={{flexDirection: 'row'}}>
                                <Text style={styles.TextOutputTitleDetails}>Torace:</Text>
                                <View style={{flexDirection: 'column', width:'80%'}}>
                                    <Text style={styles.TextOutputDetails}>Davanti: {outToraceDavanti}</Text>
                                    <Text style={styles.TextOutputDetails}>Dietro: {outToraceDietro}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ViewDataGrey}>
                            <Icon style = {styles.IconDataStyle}
                              name='git-network-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                            <Text style={styles.TextOutput}>Spalle: {outSpalle}</Text>
                        </View>
                        <View style={styles.ViewDataRow}>
                            <Icon style =  {styles.IconDataStyle}
                              name='code-working'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                            <Text style={styles.TextOutput}>Pt Calare Scalfo: {outStrPuntiCalareScalfoLato}</Text>
                        </View>
                        <View style={styles.ViewDataGrey}>
                            <Icon style = {styles.IconDataStyle}
                              name='pause-circle-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                             <View style={styles.ViewDataGreyTitleDetails}>
                                <Text style={styles.TextOutputTitleDetails}>Scollo:</Text>
                                <View style={styles.ViewDataGreyDetails}>
                                    <Text style={styles.TextOutputDetails}>Centrale: {outScolloCentrale}</Text>
                                    <Text style={styles.TextOutputDetails}>Latterale: {outScolloLaterale}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ViewDataRow}>
                            <Icon style = {styles.IconDataStyle}
                              name='reload'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                            <Text style={styles.TextOutput}>Giro Manica: {outGiroManica}</Text>
                        </View>
                        <View style={styles.ViewDataGrey}>
                            <Icon style = {styles.IconDataStyle}
                              name='male-outline'
                              type='ionicon'
                              size={24}
                              color='black'
                            /> 
                             <View style={styles.ViewDataGreyTitleDetails}>
                                <Text style={styles.TextOutputTitleDetails}>Inclinatura Spalle:</Text>
                                <View style={styles.ViewDataGreyDetails}>
                                    <Text style={styles.TextOutputDetails}>Centrale: {outInclinaturaSpalleCentrale}</Text>
                                    <Text style={styles.TextOutputDetails}>Latterale: {outInclinaturaSpalleLaterale}</Text>
                                </View>
                            </View>
                        </View>
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
   
    ViewDataRow: {
        width:'100%',
        flexDirection: 'row', 
        marginBottom:0, 
        borderBottomWidth:1,
        borderColor:'#003f5c',
    },

    ViewDataGrey: {
        width:'100%',
        flexDirection: 'row', 
        padding:10, 
        marginBottom:10, 
        borderBottomWidth:1,
        borderColor:'#003f5c',
        backgroundColor:'#e9e9e9',
    },

    ViewDataGreyTitleDetails: {
        flexDirection: 'row',
        backgroundColor:'#e9e9e9',
    },

    ViewDataGreyDetails: {
        flexDirection: 'column', 
        width:'80%',
        backgroundColor:'#e9e9e9',
    },

   IconDataStyle: {
        marginBottom:10,
        marginLeft:10,
        padding:10,
    },

    TextOutput: {
        width:'90%',
        marginBottom:10,
        marginLeft: 0,
        padding:5,
        fontSize: 18, 
        fontWeight: 'bold',
        borderBottomWidth:0,
        borderColor:'#003f5c',
        textAlignVertical:'center',
    },

    TextOutputTitleDetails: {
        width:'35%', 
        textAlignVertical:'center',
        padding:10,
        marginTop:-35,
        fontSize: 19, 
        fontWeight: 'bold',
        borderBottomWidth:0,
        borderColor:'#003f5c',
    },

    TextOutputDetails: {
        width:'90%',
        marginBottom:5,
        marginLeft: 10,
        padding:5,
        fontSize: 18, 
        fontWeight: 'bold',
        borderBottomWidth:0,
        borderColor:'#003f5c',
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
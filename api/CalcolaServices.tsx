import global from '../constants/Config'
import { DataInputCalcola, DataOutputCalcola } from '../types';

export async function CalcolaModello(dataInput:DataInputCalcola){
  var risultato:DataOutputCalcola;
  var url = global.URL + '/sartoria/calcolaModello';
  var res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataInput)
  });
  try {
    var response = { Result: false, msg: '',idCM:-1}
    var responseJson = await res.json();
    risultato = responseJson;
    return risultato;
  } catch (error) {
    console.log(error);
  }
  // @ts-ignore
  return response;
}

export async function InsertNewModel(dataInput:any) {
  var a = global.URL;
  var url = global.URL + '/sartoria/inserisciNuovoModello';
  var res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataInput)
  });
  try {
    var response = { Result: false, msg: '',idCM:-1}
    var responseJson = await res.json();
    if (responseJson.Result == 'OperationSuccess') {
      response.Result = true;
      response.idCM= responseJson.idCM;
    }
    else {
      response.Result = false;
      response.msg = responseJson.msg;
    }
  } catch (error) {
    console.log(error);
  }
  // @ts-ignore
  return response;
}
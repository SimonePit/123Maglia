import global from '../constants/Config'

export async function InsertNewModel(dataInput) {
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
    var a = error;
  }
  return response;
}
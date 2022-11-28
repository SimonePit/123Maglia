import global from '../constants/Config'

export async function RegisterUser(dataInput) {
  var a = global.LoginBaseUrl;
  var res = await fetch(global.LoginBaseUrl + '/sartoria/registraSarto', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataInput)
  });
  try {
    var response = { Result: false, msg: '' }
    var responseJson = await res.json();
    if (responseJson.Result == 'OperationSuccess') {
      response.Result = true;
    }
    else {
      response.Result = false;
      response.msg = responseJson.msg;
    }
  } catch (error) {
    var a = error;
  }
}
import global from '../constants/Config'
import { Alert } from 'react-native';

export async function DoLogin(username, password) {
  console.log("Login called")
  var urlNuovo;
  var hashedPsw;
  var response = { result: false, msg: '' }
  var url = global.LoginBaseUrl+'/LoginApp/manageUtenti/getUrl';
  var res = await fetch(url, {
    method: 'POST',
    credentials: "same-origin",
    mode:'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
      name: username.trim(),
      passwordPlainText: password.trim()
    })
  });
  try {
    var responseJson = await res.json();
    Response.result = responseJson.Result;
    if (responseJson.Result == 'OperationSuccess') {
      urlNuovo = responseJson.url;
      hashedPsw = responseJson.hashedP;
      global.BASE_URL = splitUrl(urlNuovo);
      var loginCompleted = await checkedHashedPsw(password, hashedPsw, username, urlNuovo);
      if (loginCompleted.result) {
        response.result = true;
      }
      else {
        response.result = false;
        response.msg = loginCompleted.msg;
      }
      return response
    }
    else {
      response.msg = responseJson.msg;
      response.result = false;
      return response
    }
  }
  catch (error) {
    response.msg = JSON.stringify(error)
    return response
  }

}

function getRemoteDomain(url) {
  var domain = "";
  var firstSplit = url.split("//");
  domain = firstSplit[1].split(":");
  return domain[0]
}
function splitUrl(url) {
  var domain = "";
  var firstSplit = url.split("//");
  domain = firstSplit[1].split("/");
  return firstSplit[0] + "//" + domain[0]
}

async function authenticate() {
  var response = { result: false, msg: '' }
  var url = global.URL + '/login/authenticate';
  var res = await fetch(url, {
    // mode: 'no-cors',
    credentials: "same-origin",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  );
  try {
    var responseJson = await res.json();
    if (responseJson.success == 'true' ){
      global.Role = responseJson.role;
      response.result = true;
    }
    else {
      response.result = false;
      response.msg = responseJson.msg;
    }
  } catch (error) {
    response.result = false;
    console.log(error);
  }
  return response;
}

async function setCookieFromServer(username, hashedPsw, url) {
  var response = { result: false, msg: '' }
  var url = global.LoginBaseUrl+'/LoginApp/manageUtenti/setCookie';
  var res = await fetch(url, {
    // mode: 'no-cors',
    credentials: "same-origin",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      hashedPassword: hashedPsw,
      remoteDomain: getRemoteDomain(url)
    }),
  },
  );
  try {
    var responseJson = await res.json();
    if (responseJson.Result == 'OperationSuccess') {
      var resAuth = await authenticate();
      if (resAuth.result) {
        response.result = true;
      }
      else {
        response.result = false;
        response.msg = resAuth.msg;
      }
      return response;
    }
    else {
      response.result = false;
      response.msg = responseJson.msg;
      return response;
    }
  }
  catch (err) {
    response.result = false;
    return response;
  }

}
async function checkedHashedPsw(password, hashedPsw, username, url) {
  var response = { result: false, msg: '' }
  var url = global.LoginBaseUrl+'/LoginApp/manageUtenti/checkPassword';
  var res = await fetch(url, {
    // mode: 'no-cors',
    credentials: "same-origin",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      passwordPlainText: password,
      passwordHashed: hashedPsw
    }),
  },
  );
  try {
    var responseJson = await res.json();
    if (responseJson.Result == 'OperationSuccess') {
      var resCookie = await setCookieFromServer(username, hashedPsw, url);
      if (resCookie.result) {
        response.result = true;
      }
      else {
        response.msg=resCookie.msg
        response.result = false;
      }
      return response;
    }
    else {
      response.result = false;
      response.msg = responseJson.msg;
      return response;
    }
  }
  catch (err) {
    response.result = false;
    console.log(err);
    return response;
  }
}

export async function RecuperaPwd(username) {
  console.log("RecuperaPwd called")
  var response = { Result: false, msg: '' }
  var url = global.AUTH_URL+'/LoginApp/manageUtenti/recuperaDatiUtente/';

  var res = await fetch(url, {
     // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        codiceUtente: username.trim()
      })
    },
  );

  try {
    var responseJson = await res.json();
    console.log(" -- " + responseJson.Result);
    if (responseJson.Result == 'OperationSuccess') {
      response.Result = true;
      response.msg = responseJson.msg;
    }
    else {
      response.Result = false;
      response.msg = responseJson.msg;
    }
  } catch (error) {
    response.Result = false;
    console.log(err);
    return response;

  }

  return response;


}
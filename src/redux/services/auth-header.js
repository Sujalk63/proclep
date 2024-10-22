
const user = JSON.parse(localStorage.getItem("_stl"));
let token = '';

if (user && user.token) {
    token = user.token;
}

export const authHeader = () => {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-access-token': token,
  }
  return headers;
}

export const multipartHeader = () => {

  const headers = {
    'x-access-token': token,
  }
  return headers;
}

export default { authHeader, multipartHeader };
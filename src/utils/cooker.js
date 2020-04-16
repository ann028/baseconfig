import Cookies from 'js-cookie'

// const TOKEN = 'token'

// export function setToken(token) {
//   return Cookiers.set(TOKEN, token)
// }
const TokenKey = 'Admin-Token'
const ROLES = 'roles'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles () {
  return Cookies.getJSON(ROLES)
}

export function setRoles (roles) {
  return Cookies.set(ROLES, roles)
}
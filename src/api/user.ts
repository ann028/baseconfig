import apiService from './api-service'

export function login(data: any) {
  return apiService.post(`/data/tableData`,  data)
}

export function getUserInfo() {
  return apiService.get(`/getInfo`)
}

export function logout() {
  return apiService.get(`/getInfo`)
}

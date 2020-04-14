import apiService from './api-service'

export function login(data: any){
  return apiService.post(`/user/account/login`,  data)
}
import apiService from './api-service'

export function login(data: any){
  return apiService.post(`/data/tableData`,  data)
}
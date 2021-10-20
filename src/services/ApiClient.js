import axios from 'axios'

const ApiClient = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
})

export default ApiClient

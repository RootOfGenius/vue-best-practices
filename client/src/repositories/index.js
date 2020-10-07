import axios from 'axios'
const baseURL = 'https://api.hieudt.com/api'

export default axios.create({
  baseURL
})

import axios from 'axios'

const config = {
  baseURL: `${process.env.VUE_APP_API_URL}/`,
  headers: {
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export default axios.create(config)

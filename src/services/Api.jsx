import axios from 'axios'

const publicKey = '1d46dfaa992a619f10e25a8caca9d40e'
const chavemd5= 'ac899aa2766832e73682b466ec58eb8d'
const ts = '1648140147'

const hash = chavemd5

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  method: 'GET',
  params: {
    "apikey": publicKey,
    "ts": ts,
    "hash": hash
  }
})

export default api
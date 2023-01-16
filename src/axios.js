import axios from 'axios'

const instance =axios.create({
    baseURL:'https://facebookbackend.onrender.com'
    //baseURL:'http://localhost:9000'
})

export default instance
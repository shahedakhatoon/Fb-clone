import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://localhost:9000'

    baseURL: 'https://facebook-mern2.herokuapp.com'
})

export default instance
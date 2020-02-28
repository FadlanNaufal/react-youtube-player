import axios from 'axios'

const KEY = 'AIzaSyAb0ms3ygZU0P4A-LblqBXahd1IDrbusCo'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY,
    }
})


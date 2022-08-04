import axios from "axios";
const baseUrl = '/api/results'

const sendResults = async (result = {}) => {

    const response = await axios.post(baseUrl, result)
    return response.data
}
const getResults = async (results = {}) => {
    const response = await axios.get(baseUrl, results)
    return response.data
}

const resultsHelper = {
    sendResults,
    getResults
}


export default resultsHelper
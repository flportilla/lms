import axios from "axios";
const baseUrl = 'http://localhost:3001/api/tests'

const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  axios.defaults.headers.common['Authorization'] = token
}

const rol = window.localStorage.getItem('rol')

//Send the request to add a new test
const addTest = async (question) => {
  if (rol !== 'Professor') return

  const response = await axios.post(baseUrl, question)
  return response.data
}

//Exports all functions as one object
const testHelper = {
  addTest,
  setToken,
}

export default testHelper
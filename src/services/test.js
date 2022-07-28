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

//Send the request to fetch all tests
const listTests = async () => {

  const response = await axios.get(baseUrl)
  return response.data
}

//Send the request to delete a test
const removeTest = async (id) => {
  if (rol !== 'Professor') return

  const response = await axios.delete(`${baseUrl}/${id}`, { params: { id: id } })
  return response.data
}

//Send the request to delete a test
const updateTest = async (id, updatedTest) => {
  if (rol !== 'Professor') return

  const response = await axios.put(`${baseUrl}/${id}`, updatedTest)
  return response.data
}

//Exports all functions as one object
const testHelper = {
  addTest,
  setToken,
  listTests,
  removeTest,
  updateTest,

}

export default testHelper
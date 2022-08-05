import axios from "axios";
const baseUrl = 'http://localhost:3001/api/tests'

const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  axios.defaults.headers.common['Authorization'] = token
}

const role = window.localStorage.getItem('rol')

//Send the request to add a new test
const addTest = async (question) => {
  if (role !== 'Professor') return

  const response = await axios.post(baseUrl, question)
  return response.data
}

//Send the request to fetch all tests
const listTests = async () => {

  const response = await axios.get(baseUrl)
  return response.data
}

//Send the request to delete a test
const removeTest = async (id, uid) => {
  if (role !== 'Professor') return

  const response = await axios.delete(`${baseUrl}/${id}`, { params: { id, uid } })
  return response.data
}

//Send the request to get one test
const listSelected = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`, { params: { id: id } })
  return response.data
}

//Send the request to update a test
const updateTest = async (id, updatedTest) => {
  if (role !== 'Professor') return

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
  listSelected
}

export default testHelper
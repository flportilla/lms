import axios from "axios";
const baseUrl = 'http://localhost:3001/api/users'

const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  axios.defaults.headers.common['Authorization'] = token
}

const addUser = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const getStudents = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const updateUser = async (assignedTests) => {
  const response = await axios.put(baseUrl, assignedTests)
  return response.data
}

const usersHelper = {
  addUser,
  getStudents,
  setToken,
  updateUser
}

export default usersHelper
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/questions'


const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  axios.defaults.headers.common['Authorization'] = token
}
const rol = window.localStorage.getItem('rol')

//Adds a new question
const addQuestion = async (question) => {

  if (rol !== 'Professor') return

  const response = await axios.post(baseUrl, question)
  return response.data
}


const listQuestions = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const questionHelper = {
  addQuestion,
  setToken,
  listQuestions
}

export default questionHelper
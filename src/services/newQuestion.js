import axios from "axios";
const baseUrl = 'http://localhost:3001/api/questions'


const setToken = (newToken) => {
  const token = `bearer ${newToken}`
  axios.defaults.headers.common['Authorization'] = token
}

const addQuestion = async (question) => {
  const rol = window.localStorage.getItem('rol')

  if (rol !== 'Professor') return

  const response = await axios.post(baseUrl, question)
  return response.data
}

const addQuestionHelper = {
  addQuestion,
  setToken
}

export default addQuestionHelper
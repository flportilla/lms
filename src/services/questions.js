import axios from "axios";
const baseUrl = 'http://localhost:3001/api/questions'

//Place the token as default on every request send to the server
const setToken = (newToken) => {
  const token = `${newToken}`
  axios.defaults.headers.common['flserv-token'] = token
}


//Send the request to add a new question
const addQuestion = async (question) => {
  const response = await axios.post(baseUrl, question)
  return response.data
}

//Send the request to update a question
const updateQuestion = async (id, question) => {

  const URLParams = baseUrl + `/${id}`
  const response = await axios.put(URLParams, question)
  return response.data
}

//Send the request to bring all the questions on DB
const listQuestions = async () => {

  const response = await axios.get(baseUrl)

  return response.data
}

//Send the request to bring only the selected question from the DB
const questionById = async (id) => {
  const URLParams = baseUrl + `/${id}`
  const response = await axios.get(URLParams, { params: { id: id } })
  return response.data
}

const deleteQuestionById = async (id) => {
  const URLParams = baseUrl + `/${id}`
  const response = await axios.delete(URLParams, { params: { id: id } })
  return response.data
}

//Exports all functions as one object
const questionHelper = {
  addQuestion,
  setToken,
  listQuestions,
  questionById,
  updateQuestion,
  deleteQuestionById
}

export default questionHelper
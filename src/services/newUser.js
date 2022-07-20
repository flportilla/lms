import axios from "axios";
const baseUrl = 'http://localhost:3001/api/users'

const addUser = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const addUserHelper = {
  addUser
}


export default addUserHelper
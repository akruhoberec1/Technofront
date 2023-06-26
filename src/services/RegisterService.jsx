import axios from 'axios';

const RegisterService = async (registrationData) => {
  try {
    const response = await axios.post('https://localhost:44378/api/register/register/', registrationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export { RegisterService };

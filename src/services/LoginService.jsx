import axios from 'axios';

const API_URL = 'https://localhost:44378/api';

const LoginService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/register/login`, { username, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  logout: async () => {
    try {
      await axios.get(`${API_URL}/register/logout`);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('role');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
};

export { LoginService };

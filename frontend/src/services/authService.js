import apiService from './apiService';

const authService = {
  login(email, password) {
    return apiService.post('/auth/login', { email, password });
  },

  register(name, email, password) {
    return apiService.post('/users', { name, email, password, role: 'User' });
  },

  getProfile() {
    return apiService.get('/auth/me');
  },
};

export default authService;

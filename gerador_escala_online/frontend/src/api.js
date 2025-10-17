import axios from 'axios';

// Troque esta URL após publicar o backend no Render.com
// Exemplo final: https://gerador-escala-api.onrender.com
const api = axios.create({
  baseURL: 'https://gerador-escala-api.onrender.com',
});

export default api;
import React, { useEffect, useState } from 'react';
import api from './api';
import EscalaList from './components/EscalaList';

function App() {
  const [escalas, setEscalas] = useState([]);
  const [status, setStatus] = useState('carregando');

  useEffect(() => {
    api.get('/escalas')
      .then(response => {
        setEscalas(response.data);
        setStatus('ok');
      })
      .catch(err => {
        console.error('Erro ao buscar escalas:', err);
        setStatus('erro');
      });
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'Arial, sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <h1>Gerador de Escala</h1>
      {status === 'carregando' && <p>Carregando...</p>}
      {status === 'erro' && (
        <p style={{ color: 'red' }}>
          Não foi possível carregar as escalas. Verifique se a API está online e a URL de base está correta.
        </p>
      )}
      <EscalaList escalas={escalas} />
      <hr />
      <p style={{fontSize: 12, opacity: 0.7}}>
        Dica: para produção, hospede o backend no Render e o frontend na Vercel.
      </p>
    </div>
  );
}

export default App;
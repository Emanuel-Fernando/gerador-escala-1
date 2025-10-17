from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configurações básicas
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'chave_secreta_para_token'  # troque em produção

db = SQLAlchemy(app)
jwt = JWTManager(app)

# Rotas de exemplo
@app.route('/')
def home():
    return jsonify({'mensagem': 'API do Gerador de Escala online!'})

@app.route('/escalas')
def escalas():
    return jsonify([
        {'funcionario': 'João', 'turno': 'Manhã'},
        {'funcionario': 'Maria', 'turno': 'Tarde'}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

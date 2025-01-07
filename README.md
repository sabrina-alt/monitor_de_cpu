# 🖥️ Monitor de CPU - Node.js & Vue 3

Este projeto é um **Monitor de CPU em tempo real** que exibe o uso da CPU, memória total e memória livre do sistema.  
Foi desenvolvido com **Node.js (Express)** no backend e **Vue 3 + Vuetify** no frontend, além de um **gráfico dinâmico** com **Chart.js** para visualização dos dados.

---

## 🚀 Tecnologias Utilizadas
- **Backend**: Node.js, Express, os-utils
- **Frontend**: Vue 3, Vuetify 3, Chart.js
- **Estilo**: Vuetify para UI moderna e responsiva

---

## 📌 Funcionalidades
✅ Exibição do uso da CPU em tempo real (%)  
✅ Gráfico dinâmico com atualização a cada 1 segundo  
✅ Exibição da memória total e livre do sistema  
✅ Design inspirado no **Monitor de Atividade da Apple (macOS)**  
✅ API REST para fornecer dados do sistema  

---

## 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/)
- [Vue CLI](https://cli.vuejs.org/)

---

## ⚙️ Instalação e Execução

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/monitor-cpu.git
cd monitor-cpu

## config Backend
cd backend
npm install
node server.js

## config Frontend
cd frontend
npm install
npm run serve

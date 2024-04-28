<script>
import axios from 'axios';

export default {
  data() {
    return {
      empresa: {
        cnpj: '',
        razaoSocial: '',
        telefone: '',
        email: ''
      }
    };
  },
  methods: {
    submitForm() {
      
      if (!this.empresa.cnpj || !this.empresa.razaoSocial || !this.empresa.telefone || !this.empresa.email) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      console.log('Enviando dados para o backend:', this.empresa);

      this.empresa = {
        cnpj: '',
        razaoSocial: '',
        telefone: '',
        email: ''
      };
      
    }
  }
};
</script>
<template>
  <main>
    <h1>Empresa</h1>
    <form @submit="submitForm">
      <label for="cnpj">CNPJ:</label>
      <input
        v-model="empresa.cnpj"
        id="cnpj"
        type="text"
        placeholder="CNPJ"
        required
      />

      <label for="razaoSocial">Razão Social:</label>
      <input
        v-model="empresa.razaoSocial"
        id="razaoSocial"
        type="text"
        placeholder="Razão Social"
        required
      />

      <label for="telefone">Telefone:</label>
      <input
        v-model="empresa.telefone"
        id="telefone"
        type="tel"
        placeholder="Telefone"
        required
      />

      <label for="email">Email:</label>
      <input
        v-model="empresa.email"
        id="email"
        type="email"
        placeholder="Email"
        required
      />

      <button type="submit">Salvar</button>
    </form>
  </main>
</template>

<style scoped>
main h1 {
  font-size: 24px; 
  color: #333; 
  margin-bottom: 20px; 
}

form {
  width: 100%; 
}

form label {
  display: block; 
  margin-bottom: 10px; 
}

form input {
  width: 100%; 
  padding: 10px; 
  margin-bottom: 15px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  box-sizing: border-box; 
}

form button {
  padding: 10px 20px; 
  background-color: #007bff; 
  color: #fff;
  border: none; 
  border-radius: 5px; 
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>

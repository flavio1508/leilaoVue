<script>
export default {
  data() {
    return {
      unidades: [ 
        { id: 1, nome: 'Unidade 1', endereco: 'Endereço 1', cidade: 'Cidade 1' },
        { id: 2, nome: 'Unidade 2', endereco: 'Endereço 2', cidade: 'Cidade 2' },
        { id: 3, nome: 'Unidade 3', endereco: 'Endereço 3', cidade: 'Cidade 3' },
      ]
    };
  }
};
</script>
<template>
    <main>
  <h1>Unidades</h1>
  
  <table>
    <thead>
      <tr>
        <th>Nome</th> 
        <th>Endereço</th> 
        <th>Cidade</th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="unidade in unidades" :key="unidade.id">
        <td>{{ unidade.nome }}</td> 
        <td>{{ unidade.endereco }}</td> 
        <td>{{ unidade.cidade }}</td>
      </tr>
    </tbody>
  </table>
</main>
</template>

<style scoped>
main h1 {
  font-size: 24px; 
  color: #333; 
  margin-bottom: 20px;
}


table {
  width: 100%; 
  border-collapse: collapse; 
}

th {
  background-color: #f2f2f2; 
  padding: 10px;
  text-align: left; 
  font-weight: bold; 
  border-bottom: 2px solid #ccc;
}

td {
  padding: 10px; 
  border-bottom: 1px solid #ccc; 
}

tbody tr:nth-child(odd) {
  background-color: #f9f9f9; 
}

tbody tr:hover {
  background-color: #eaeaea; 
}
</style>

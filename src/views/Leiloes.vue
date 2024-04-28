<script>
export default {
  data() {
    return {
      leiloes: [ 
        { id: 1, campo1: 'Valor 1', campo2: 'Valor 2', campo3: 'Valor 3' },
        { id: 2, campo1: 'Valor 4', campo2: 'Valor 5', campo3: 'Valor 6' },
        { id: 3, campo1: 'Valor 7', campo2: 'Valor 8', campo3: 'Valor 9' },
      ]
    };
  }
};
</script>

<template>
    <main>
  <h1>Leilões</h1>
  
  <table>
    <thead>
      <tr>
        <th>Cabeçalho 1</th> 
        <th>Cabeçalho 2</th> 
        <th>Cabeçalho 3</th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="leilao in leiloes" :key="leilao.id">
        <td>{{ leilao.campo1 }}</td> 
        <td>{{ leilao.campo2 }}</td> 
        <td>{{ leilao.campo3 }}</td> 
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

<script setup>
import { RouterLink } from 'vue-router'

const getNavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li><RouterLink to="/unidades">Unidades</RouterLink></li>
        <li><RouterLink to="/empresas">Empresas</RouterLink></li>
        <li><RouterLink to="/leiloes">Leilões</RouterLink></li>
      </ul>
    </nav>
  )
}
</script>



<template>
  

 <main>
  { getNavigationMenu() }
  <RouterView />
</main>
</template>

<style scoped>

</style>

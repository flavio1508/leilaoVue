import Vue from 'vue';
import VueRouter from 'vue-router';
import Unidades from './views/unidade/Unidades.vue';
import Empresas from './views/empresa/Empresa.vue';
import Leiloes from './views/leilao/Leiloes.vue';
import EmpresaCadastro from './views/empresa/EmpresaCadastro.vue';
import EmpresaEdicao from './views/empresa/EmpresaEdicao.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/unidades', name: 'Unidades', component: Unidades },
  { path: '/empresas', name: 'Empresas', component: Empresas },
  { path: '/leiloes', name: 'Leiloes', component: Leiloes },
  { path: '/empresa', name: 'NovaEmpresa', component: EmpresaCadastro },
  { path: '/empresa/:id', name: 'EditarEmpresa', component: EmpresaEdicao }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

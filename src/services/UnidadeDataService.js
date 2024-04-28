import http from '../http-commons';

class UnidadeService {
  async cadastrar(unidade) {
    let resposta = await http.post('/unidade', unidade);
    return resposta.data;
  }

  async buscarPorId(id) {
    let resposta = await http.get('/unidade/' + id);
    return resposta.data;
  }

  async atualizar(id, unidade) {
    let resposta = await http.put(`/unidade/` + id, unidade);
    return resposta.data;
  }

  async remover(id) {
    await http.delete(`/unidade/` + id);
  }
}

export default new UnidadeService();

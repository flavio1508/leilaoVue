import http from '../http-commons';

class LeilaoService {
  async cadastrar(leilao) {
    let resposta = await http.post('/leilao', leilao);
    return resposta.data;
  }

  async buscarPorId(id) {
    let resposta = await http.get('/leilao/' + id);
    return resposta.data;
  }

  async atualizar(id, leilao) {
    let resposta = await http.put(`/leilao/` + id, leilao);
    return resposta.data;
  }

  async remover(id) {
    await http.delete(`/leilao/` + id);
  }
}

export default new LeilaoService();

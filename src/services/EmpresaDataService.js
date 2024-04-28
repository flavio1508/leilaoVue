import http from '../http-commons';

class EmpresaService {
  async cadastrar(empresa) {
    let resposta = await http.post('/empresa', empresa);
    return resposta.data;
  }

  async buscarPorId(id) {
    let resposta = await http.get('/empresa/' + id);
    return resposta.data;
  }

  async atualizar(id, empresa) {
    let resposta = await http.put(`/empresa/` + id, empresa);
    return resposta.data;
  }

  async remover(id) {
    await http.delete(`/empresa/` + id);
  }
}

export default new EmpresaService();

export default class LeilaoResponse {
  constructor() {
    this.id = null;
    this.codigo = null;
    this.descricao = null;
    this.vendedorId = null;
    this.inicioPrevisto = null;
  }

  populate(obj) {
    this.id = obj.id;
    this.codigo = obj.codigo;
    this.descricao = obj.descricao;
    this.vendedorId = obj.vendedorId;
    this.inicioPrevisto = obj.inicioPrevisto;
  }

  toJson() {
    return {
      id: this.id,
      codigo: this.codigo,
      descricao: this.descricao,
      vendedorId: this.vendedorId,
      inicioPrevisto: this.inicioPrevisto
    };
  }
}

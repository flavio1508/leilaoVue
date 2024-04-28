export default class LeilaoRequest {
    constructor() {
      this.codigo = null;
      this.descricao = null;
      this.vendedorId = null;
      this.inicioPrevisto = null;
    }
  
    populate(obj) {
      this.codigo = obj.codigo;
      this.descricao = obj.descricao;
      this.vendedorId = obj.vendedorId;
      this.inicioPrevisto = obj.inicioPrevisto;
    }
  
    toJson() {
      return {
        codigo: this.codigo,
        descricao: this.descricao,
        vendedorId: this.vendedorId,
        inicioPrevisto: this.inicioPrevisto
      };
    }
  }
  
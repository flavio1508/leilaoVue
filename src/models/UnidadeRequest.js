export default class UnidadeRequest {
    constructor() {
      this.nome = null;
    }
  
    populate(obj) {
      this.nome = obj.nome;
    }
  
    toJson() {
      return {
        nome: this.nome
      };
    }
  }
  
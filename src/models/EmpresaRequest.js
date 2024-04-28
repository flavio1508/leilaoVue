export default class EmpresaRequest {
  constructor() {
    this.razaoSocial = null;
    this.cnpj = null;
    this.logradouro = null;
    this.municipio = null;
    this.numero = null;
    this.complemento = null;
    this.bairro = null;
    this.cep = null;
    this.telefone = null;
    this.email = null;
    this.site = null;
    this.usuario = null;
    this.senha = null;
  }

  populate(obj) {
    this.razaoSocial = obj.razaoSocial;
    this.cnpj = obj.cnpj;
    this.logradouro = obj.logradouro;
    this.municipio = obj.municipio;
    this.numero = obj.numero;
    this.complemento = obj.complemento;
    this.bairro = obj.bairro;
    this.cep = obj.cep;
    this.telefone = obj.telefone;
    this.email = obj.email;
    this.site = obj.site;
    this.usuario = obj.usuario;
    this.senha = obj.senha;
  }

  toJson() {
    return {
      razaoSocial: this.razaoSocial,
      cnpj: this.cnpj,
      logradouro: this.logradouro,
      municipio: this.municipio,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cep: this.cep,
      telefone: this.telefone,
      email: this.email,
      site: this.site,
      usuario: this.usuario,
      senha: this.senha
    };
  }
}

class Usuario {
  constructor(nickname, nome) {
    this.nickname = nickname;
    this.nome = nome;
  }

  imprimir_dados() {
    return "Dados de Usuário: Nickname-" + this.nickname + ", Nome-" + this.nome;
  }
}

class Jogos {
  constructor(titulo, descricao, preco_base) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco_base = preco_base;
  }
  imprimir_dados() {
    return "Dados de Jogos: Título-" + this.titulo + ", Descrição-" + this.descricao + ", Preço_Base-" + this.preco_base;
  }
}

class Conquistas {
  constructor(titulo, descricao, conquista_jogo) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.conquista_jogo = conquista_jogo;
  }
  imprimir_dados() {
    return "Dados de Conquistas: Título-" + this.titulo + ", Descrição-" + this.descricao + ", Conquista-" + this.conquista_jogo;
  }
}

const usuario = new Usuario("Canezin", "João");
console.log(usuario.imprimir_dados());

const jogos = new Jogos("Euro Truck", "Jogo de Caminhão", 100);
console.log(jogos.imprimir_dados());

const conquistas = new Conquistas("Garagem Própria", "Obteve sua garegem própria", "Conquista Concluída");
console.log(conquistas.imprimir_dados());

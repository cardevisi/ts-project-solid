  ## Object Oriented Programming

  OO é uma abordagem de programação que organiza o código em objetos, 
  que são instâncias de classes.
  
  Classe é uma estrutura de dados que define como um objeto deve ser 
  composto, ou seja, quais atributos ele deve ter e quais métodos ele deve 
  implementar.
  
  Objeto é uma instância de uma classe, ou seja, ele possui todos os 
  atributos e métodos definidos na classe.
  
  Métodos são funções que pertencem a uma classe ou um objeto e que 
  operam sobre os atributos do objeto.
  
  Atributos são valores que pertencem a um objeto e que são usados 
  pelos métodos para realizar suas operações.
  
  Herança é o processo de uma classe herdar características de outra 
  classe. Uma classe filho pode herdar todos os atributos e métodos 
  de uma classe pai.
  
  Polimorfismo é a capacidade de um objeto ser usado de forma diferente, 
  dependendo do contexto em que ele é usado. Isso significa que um 
  objeto pode ter diferentes comportamentos<|func_body|> suas dependendo de como 
  ele é usado.
  
  Encapsulamento é a capacidade de esconder dados e detalhes de implementação 
  de um objeto, para que eles não possam ser modificados diretamente. 
  Isso significa que um objeto pode ter atributos e métodos protegidos 
  que só podem ser acessados a partir de dentro da classe.
  
  Abstração é a capacidade de representar algo de forma geral, sem 
  precisar saber todos os detalhes. Isso significa que uma classe 
  pode ser usada para representar um tipo de objeto, sem precisar 
  saber todos os detalhes de como ele é composto.

  Classe concreta: é uma classe que pode ser instanciada diretamente, é uma classe que pode ser usada para criar objetos.
  Em outras palavras, uma classe concreta é uma classe que não é abstrata.
  
  Já uma classe abstrata não pode ser instanciada diretamente, é uma classe que serve como base para outras classes concretas.
  Ela define metodos e/ou atributos que as classes concretas que a herdam devem implementar ou sobrescrever.

  ## SOLID

  ## S = SINGLE RESPONSIBILITY PRINCIPLE:
    A classe deve ter responsabilidade única, ou seja, ela deve fazer uma coisa e fazer bem.
    Isso ajuda a tornar o código mais fácil de entender, testar e manter.
    algum mudar por motivos diferentes, se isso ocorre é que ela tem mais de uma responsabilidade.

  ## O = OPEN/CLOSE PRINCIPLE:
    A classe deve ser aberta para extensão, mas fechada para modificação.
    Isso significa que podemos adicionar novas funcionalidades sem precisar modificar a classe existente.
    Por exemplo, se adicionarmos um novo tipo de rede social, podemos apenas criar uma nova classe e ela será usada automaticamente, sem precisar mudar a classe existente.

  ## L = LISKOV SUBSTITUTION PRINCIPLE:
    As classes devem ser substitíveis.
    Isso significa que podemos substituir uma classe por outra sem alterar o código existente.
    Por exemplo, se adicionarmos um novo tipo de rede social, podemos apenas criar uma nova classe e ela será usada automaticamente, sem precisar mudar a classe existente.

  ## I = INTERFACE SEGREGATION PRINCIPLE:
    As interfaces devem ser segregadas.
    Isso significa que uma classe deve ser dividida em interfaces menores, cada uma com uma responsabilidade unica.
    Por exemplo, se adicionarmos um novo tipo de rede social, podemos apenas criar uma nova interface e a classe será usada automaticamente, sem precisar mudar a classe existente.

  ## D = DEPENDENCY INVERSION PRINCIPLE:
    A classe deve ser dependente da interface e nunca da classe abstrata.
    Isso significa que uma classe depende de uma interface e nunca de uma classe abstrata.
    Por exemplo, se adicionarmos um novo tipo de rede social, podemos apenas criar uma nova interface e a classe será usada automaticamente, sem precisar mudar a classe existente.
import IAnimal from "./IAnimal";

/**
 * The Interface Segregation Principle (ISP) states that no client should be forced to depend on methods it does not use.
 * ISP is also known as "The Dependency Inversion Principle" (DIP) or "Many client specific interfaces, not one general purpose interface".
 *
 * The idea is that if a class has a dependency on a large interface, but only uses a small part of it, then the class is coupled to the entire interface.
 *
 * By breaking the large interface into smaller, more specific interfaces, a class only needs to depend on the interface it actually uses,
 * which makes the code more flexible and easier to maintain.
 *
 * For example, imagine you have a class that needs to print something. You could create an interface with a single method `print()`:
 * 

A Interface Segregation Principle (ISP) é um princípio do SOLID que diz que um cliente não deve ser forçado a depender de métodos que ele não usa. Em outras palavras, um cliente não deve ser acoplado a uma interface grande quando ele só precisa de um método dela.

O princípio ISP é também conhecido como "The Dependency Inversion Principle" (DIP), ou "Muitas interfaces específicas para clientes, não uma interface genérica".

O que isso significa é que se uma classe tem uma dependência de uma grande interface, mas só usa uma pequena parte dela, então a classe está acoplada a toda a interface.

Por isso, ao quebrar a grande interface em interfaces menores, específicas para o cliente, a classe só depende da interface que ela realmente usa, o que torna o código mais flexível e fácil de manter.

Imagine que você tem uma classe que precisa imprimir algo. Você pode criar uma interface com um único método `print()`:

Em resumo, a ISP diz que uma classe não deve ser acoplada a uma interface grande quando ela só precisa de um método dela.

*/

interface IAve extends IAnimal {
  fly(): void;
}

export default IAve;

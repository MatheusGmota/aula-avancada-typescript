import { EstoqueVeiculos } from './classes/EstoqueVeiculos';
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";

const meuCarro: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2010,
    portas: 4,
    acelerar: () => "Carro acelerando",
}

const outroCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    portas: 4,
    acelerar: () => "Carro acelerando",
}

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};
console.log("Carro:", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());

// Exercício 1
const gerenciadorVeiculo = new GerenciadorVeiculos<Carro>();

gerenciadorVeiculo.adicionar(meuCarro);
gerenciadorVeiculo.adicionar(outroCarro);

gerenciadorVeiculo.listarVeiculos();

gerenciadorVeiculo.remover(outroCarro);

gerenciadorVeiculo.listarVeiculos();

// Exercício 2
const estoqueVeiculo = new EstoqueVeiculos<Carro>();

estoqueVeiculo.adicionarEstoque(outroCarro.modelo, 5);
estoqueVeiculo.adicionarEstoque(meuCarro.modelo, 2);

estoqueVeiculo.removerEstoque(outroCarro.modelo, 1)

estoqueVeiculo.consultarEstoque(outroCarro.modelo);
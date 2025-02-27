import { EstoqueVeiculos } from './classes/EstoqueVeiculos';
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";
import { FiltraVeiculos } from './utils/FiltrarVeiculos';

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
    ano: 2021,
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

const outraMoto: Moto = {
    marca: "Yamaha",
    modelo: "MT-07",
    ano: 2022,
    cilindradas: 700,
    acelerar: () => "A Yamaha MT-07 está acelerando!"
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

// Exercício 3
const listaVeiculos = [meuCarro, meuCarro, outroCarro, minhaMoto, outraMoto];

const filtraVeiculos = new FiltraVeiculos();

const filtroAno = filtraVeiculos.filtrarPorAno(listaVeiculos, 2021);
console.log("Filtro por Ano(2021): ");
console.log(filtroAno);

const filtroMarca = filtraVeiculos.filtrarPorMarca(listaVeiculos, "Honda");
console.log("\nFiltro por Marca('Honda'): ");
console.log(filtroMarca);

const filtroModelo = filtraVeiculos.filtrarPorModelo(listaVeiculos, "Corolla");
console.log("\nFiltro por Modelo('Corolla'): ");
console.log(filtroModelo);
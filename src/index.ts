import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";

const meuCarro: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2010,
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
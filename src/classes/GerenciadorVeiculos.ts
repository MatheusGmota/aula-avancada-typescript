import { Veiculo } from "../interfaces/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo>  {
    private listaVeiculos: T[] = []

    adicionar(veiculo: T): void{
        this.listaVeiculos.push(veiculo)
    };

    remover(veiculo: T): void {
        const item = this.listaVeiculos.find(v => v === veiculo);

        if (item) {
            this.listaVeiculos = this.listaVeiculos.filter(v => v !== veiculo)
        } else {
            console.log('Esse veículo não está na lista.');
        } 
    }; 
    
    listarVeiculos(): void {
        console.log("Listando Veículos: ");
        this.listaVeiculos.forEach((v) => console.log(v))
    };
}
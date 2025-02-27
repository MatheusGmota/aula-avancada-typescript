import { Veiculo } from "../interfaces/Veiculo";

export class FiltraVeiculos {

    filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
        const veiculosFiltrados = veiculos.filter(v => v.ano === ano);
        return veiculosFiltrados;
    }

    filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
        const veiculosFiltrados = veiculos.filter(v => v.marca === marca);
        return veiculosFiltrados;
    }
    
    filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[] {
        const veiculosFiltrados = veiculos.filter(v => v.modelo === modelo);
        return veiculosFiltrados;
    }
}
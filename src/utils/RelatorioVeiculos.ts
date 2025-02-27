import { Moto } from './../interfaces/Moto';
import { Veiculo } from './../interfaces/Veiculo';

export class RelatorioVeiculos {
    
    gerarRelatorio(veiculos:Veiculo[]): string {
        let relatorio = "";
        veiculos.forEach((v, i) => {
            relatorio += `${i+1}. Marca: ${v.marca} - Modelo: ${v.modelo} -  Ano: ${v.ano}\n`
        })
        return relatorio;
    }
}
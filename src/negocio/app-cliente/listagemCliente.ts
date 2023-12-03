import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Listagem from "../prog-abstract/listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n\nLista de todos os clientes:\n--------------------------------------`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}  ||  Nome Social: ${cliente.nomeSocial}`);
            console.log(`Data de Cadastro:  ${this.formatarData(cliente.getDataCadastro)}`);
            console.log(`CPF: ${cliente.cpf.getValor} - Data de Emissão: ${this.formatarData(cliente.cpf.getDataEmissao)}`);
            console.log(`\nRG(s):`);
            cliente.rgs.forEach(rg => {
                console.log(`RG: ${rg.getValor} - Data de Emissão: ${this.formatarData(rg.getDataEmissao)}`);
            });
            console.log(`\nTelefone(s):`);
            cliente.telefones.forEach(telefone => {
                console.log(`Numero: (${telefone.getDdd}) - ${telefone.getNumero}`);
            });
            console.log(`Pets: `);
            cliente.getPets.forEach(pet => {
                console.log(`Nome do Pet: ${pet.getNome}`);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    private formatarData(data: Date): string {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}
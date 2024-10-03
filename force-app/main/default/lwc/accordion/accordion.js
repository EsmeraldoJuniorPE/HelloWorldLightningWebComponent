import { LightningElement } from 'lwc';

export default class Accordion extends LightningElement {
    // Declaração de variáveis
    serie = ''; // Variável para armazenar a série selecionada
    serieEscolhida = false; // Flag para indicar se uma série foi escolhida
    a = false; // Flags para controle de exibição de seções específicas
    b = false;
    c = false;

    // Método para retornar as opções de série
    get optionsSeries() {
        return [
            { label: 'Série 1', value: 'serie1' },
            { label: 'Série 2', value: 'serie2' },
            { label: 'Série 3', value: 'serie3' },
        ];
    }

    // Manipulador de evento para alterações no input
    handleChange(e) {
        this[e.target.name] = e.detail.value;

        // Verifica se uma série foi selecionada
        if (e.target.name === 'serie' && this.serie !== '') {
            this.serieEscolhida = true;
            this.serieQueFoiEscolhida = this.serie;

            // Define quais flags devem ser ativadas com base na série escolhida
            if (this.serie === 'serie1') {
                this.a = true;
            } else if (this.serie === 'serie2') {
                this.b = true;
            } else if (this.serie === 'serie3') {
                this.c = true;
            }
        } else {
            this.serieEscolhida = false;
        }
    }

    // Método para manipular ação de alternância de seção (ainda não implementado)
    handleToggleSection() {
        // Implementação pendente
    }
}

import criarConta from '@salesforce/apex/CriarContas.criarConta';
import { LightningElement } from 'lwc';

export default class CriarConta extends LightningElement {

    conta = {};

    changeHandler(event) {
        this.conta[event.target.name] = event.target.value;
    }

    handleClickSalvar() {
        if (this.conta) {
            criarConta({ conta: this.conta });
            this.nomeCompleto = '';
        }        
    }
}
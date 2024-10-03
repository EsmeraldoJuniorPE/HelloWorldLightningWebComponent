import criarConta from '@salesforce/apex/CriarContas.criarContas';
import { LightningElement, track } from 'lwc';

export default class AddFormulario extends LightningElement {

    @track formularios = [];

    handleChange(e) {
        const index = e.target.dataset.index;
        this.formularios[index][e.target.name] = e.target.value;

    }

    handleDeleteFormulario(e) {
        const index = e.target.dataset.index;
        this.formularios.splice(index, 1);
    }

    addFormulario() {
        const newFormulario = {
            id: Date.now(),
            Name: '',
            Idade__c: 0
        };

        this.formularios.push(newFormulario);
    }

    handleClickSalvar() {
        if (this.formularios) {
            criarConta({contas: this.formularios});
        }

    }
}
import MeuModal from 'c/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement } from 'lwc';

export default class Toast extends LightningElement {

    result;

    connectedCallback() {
        this.showToast('Sucesso', 'A tela foi iniciada com sucesso',
            'success');
    }

    async handleClick() {
        this.result = await MeuModal.open({
            size: 'large',
            content: 'Abrir o Modal a partir de um outro componente',
            options: [
                { id: 1, label: 'Option 1', value : 'um' },
                { id: 2, label: 'Option 2', value : 'dois'},
            ],
            disableClose : true
        });
    }

    showToastAviso() {
        this.showToast('Aviso', 'Não pode fazer isso', 'warning');
    }

    showToastErro() {
        this.showToast('Erro', 'Deu errado', 'error');
    }
    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        }));
    }
}
import { LightningElement, api } from 'lwc';

export default class EditarContatos extends LightningElement {
    @api recordId;

    handleContatct(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            inputFields.forEach(
                field => {
                    field.reset();
                }
            );
        }
    }    
}
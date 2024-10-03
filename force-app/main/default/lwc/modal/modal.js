import LightningModal from 'lightning/modal';
import { api } from 'lwc';

export default class Modal extends LightningModal {
    @api content;
    @api options = [];

    handleOkay(){
        this.close('Fechou');
    }

    handleOptionClick(e) {
        const { target } = e;
        const { id, value } = target.dataset;  
        this.disableClose = false;
        this.close(value);
      }    
}
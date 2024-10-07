import cssCustomizado from '@salesforce/resourceUrl/cssCustom';
import { loadStyle } from 'lightning/platformResourceLoader';
import { LightningElement } from 'lwc';

export default class CssCustom extends LightningElement {

    connectedCallback(){
        Promise.all([
            loadStyle(this, cssCustomizado)
        ]).catch(error =>{
            console.error('Não foi possivel carregar o css customizado', error);
        });
    }

    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

}
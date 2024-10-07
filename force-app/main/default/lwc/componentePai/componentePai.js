import getAccount from '@salesforce/apex/ComponentePaiController.getAccount';
import getDadosEmpresas from '@salesforce/apex/ComponentePaiController.getDadosEmpresas';
import { LightningElement, wire } from 'lwc';

export default class ComponentePai extends LightningElement {

    dadosPai;                                                                                                                                                                                                   
    connectedCallback(){        
        this.pegarValoresEmpresa();
    }

    async pegarValoresEmpresa(){
        try{
            this.dadosPai = await getDadosEmpresas();
            console.log('contas: ' + JSON.stringify(dadosPai));
        } catch(error){
            console.log('error: ' + JSON.stringify(error));
            this.setToast('Error', 'Não possivel carregar as contas', 'error');
        }       
    }

    @wire(getAccount)
    contas({data, error}){
        if(data){
            this.contas = data;
            console.log('contas: ' + JSON.stringify(this.contas));
        }else if(error){
            console.log('error: ' + JSON.stringify(error));
            this.setToast('Error', 'Não possivel carregar as contas', 'error');
        }        
    }   

    handleClickItemSelecionadoPai(e){        
        console.log(JSON.stringify(e.detail.dado));
    }
}
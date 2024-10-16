import { LightningElement, api } from 'lwc';

export default class Carrossel extends LightningElement {
    @api dados;
    pagina = 0;
    paginaSelecionada; 
    
    connectedCallback(){}

    get posicao(){
        return `transform:translateX(-${this.pagina * 100}%);`;
    }

    get botaoRetorno(){
        return this.pagina === 0;
    }

    get botaoAvancar(){
        return this.pagina === this.dados.length -1;
    }

    get slideJs(){
        return this.paginaSelecionada == this.pagina ? 'slide slideSelecionado' : 'slide';
    }

    previousSlide(){
        if(this.pagina > 0){
            this.pagina -= 1;
        }
    }

    nextSlide(){
        if(this.pagina < this.dados.length -1){
            this.pagina += 1;
        }
    }

    mudarvalor(e){
        this.dados = JSON.parse(JSON.stringify(this.dados));
        this.dados[e.target.dataset.index].empresa = e.target.value;        
    }

    handleClickItemSelecionado(){
        this.paginaSelecionada = this.pagina;        
        const selecionado = new CustomEvent('passavalor',{
            detail : {
                dado : this.dados[this.pagina]
            }
        });
        this.dispatchEvent(selecionado);
    }   
}
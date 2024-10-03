import { LightningElement } from 'lwc';

export default class Carousel extends LightningElement {
    pagina = 0;
    paginaSelecionada;

    dados = [
        {
            id: 1,
            empresa: 'Empresa 1',
            produtos: [
                { id: 1, nome: 'Produto 1' },
                { id: 2, nome: 'Produto 2' }
            ],
            distribuidoras: [
                { id: 1, nome: 'Distribuidora 1' },
                { id: 2, nome: 'Distribuidora 2' }
            ],
            lojas: [
                { id: 1, nome: 'Loja 1' },
                { id: 2, nome: 'Loja 2' },
                { id: 2, nome: 'Loja 3' },
            ]
        },
        {
            id: 2,
            empresa: 'Empresa 2',
            produtos: [
                { id: 1, nome: 'Produto 1' },
                { id: 2, nome: 'Produto 2' }
            ],
            distribuidoras: [
                { id: 1, nome: 'Distribuidora 3' },
                { id: 2, nome: 'Distribuidora 4' }
            ],
            lojas: [
                { id: 2, nome: 'Loja 5' },
                { id: 1, nome: 'Loja 4' },
                { id: 3, nome: 'Loja 6' },
            ]
        },
        {
            id: 3,
            empresa: 'Empresa 3',
            produtos: [
                { id: 1, nome: 'Produto 1' },
                { id: 2, nome: 'Produto 2' }
            ],
            distribuidoras: [
                { id: 1, nome: 'Distribuidora 5' },
                { id: 2, nome: 'Distribuidora 6' }
            ],
            lojas: [
                { id: 2, nome: 'Loja 7' },
                { id: 1, nome: 'Loja 8' },
                { id: 3, nome: 'Loja 9' },
            ]
        }
    ];

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

    handleClickItemSelecionado(){
        this.paginaSelecionada = this.pagina;
        console.log(JSON.stringify(this.dados[this.pagina]));
    }
}
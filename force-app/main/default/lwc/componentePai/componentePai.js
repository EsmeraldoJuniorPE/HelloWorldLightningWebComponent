import { LightningElement } from 'lwc';

export default class ComponentePai extends LightningElement {

    dadosPai = [
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

    handleClickItemSelecionadoPai(e){        
        console.log(JSON.stringify(e.detail.dado));
    }
}
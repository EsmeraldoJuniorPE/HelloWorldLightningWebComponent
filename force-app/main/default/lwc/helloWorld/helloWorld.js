import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    nomeCompleto = '';
    idade = '';
    estudante = false;
    serie = '';
    generoSelecionado;
    genero = false;
    clickedButtonMostrarNome;

    mapMarkers = [];
    pais;
    zoomLevel = 4;

    /*changeHandlerPais(event) {
        this.pais = event.target.value;
    }*/

    handleClickBuscarMap(event) {
        if (this.pais) {
            this.mapMarkers = [
                {
                    location: {
                        Country: this.pais,
                    },
                },
            ];
        }
    }

    get optionsGeneros() {
        return [
            { label: 'Masculino', value: 'masculino' },
            { label: 'Feminino', value: 'feminino' },
        ];
    }

    changeHandlerGenero(event) {
        this.generoSelecionado = event.target.value;
        if (this.generoSelecionado == 'masculino') {
            this.genero = true;
        } else {
            this.genero = false;
        }
    }

    changeHandler(event) {
        this[event.target.name] = event.target.value;
    }

    /*changeHandler(event) {
        this.nomeCompleto = event.target.value;
    }

    changeHandlerIdade(event) {
        this.idade = event.target.value;
    }*/

    changeHandlerChecked(event) {
        this[event.target.name] = event.target.checked;
        if (event.target.name == 'estudante' && !this.estudante) this.serie = '';
    }


    /*changeHandlerEstudante(event) {
        this.estudante = event.target.checked;
        if (!this.estudante) this.serie = '';
    }*/

    handleClickSalvar(event) {
        if (this.clickedButtonMostrarNome != '') {
            this.clickedButtonMostrarNome = '';
        } else {
            this.clickedButtonMostrarNome = this.nomeCompleto;
        }
    }

    handleClickLimparCampos(event) {
        this.nomeCompleto = '';
        this.idade = '';
        this.estudante = false;
        this.serie = '';
        this.generoSelecionado = '';
        this.clickedButtonMostrarNome = '';
        this.pais = '';
        this.mapMarkers = '';
    }

    get optionsSeries() {
        return [
            { label: 'Série 1', value: '1' },
            { label: 'Série 2', value: '2' },
            { label: 'Série 3', value: '3' },
        ];
    }

    handleChangeSerie(event) {
        this.serie = event.detail.value;
    }
}
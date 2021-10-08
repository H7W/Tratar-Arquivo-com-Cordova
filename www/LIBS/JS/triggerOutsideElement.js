$(document).click(function (e) {


    removerClassAtiva()

    function removerClassAtiva() {
        // → Se onde foi clicado não houver a class pré-determinada então remover a classe ativa
        var getEl = $(e.target)
        // console.log('↓ getEl ↓')
        // console.log(getEl)

        let getClassEl = getEl.attr('class');
        // console.log('↓ getClassEl ↓')
        // console.log(getClassEl)

        if (getEl != "painel-A1") {
            // console.log("Retorno verdadeiro: Isso não pertence à classe " +getEl)
            $('.tab-A1').removeClass('SELC-1')
            $('.painel-A1').removeClass('ACTIVE_painel-A1')
        }
    }
})

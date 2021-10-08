const app = {
    init: () => {
        setTimeout(function () {
            console.log('::Web/App:: 15/17 inicializado')
            app.addListeners()
        }, 2000);
    },
    addListeners: () => {
        // → btns: selecionado
        let $btn_entrarApp = $('#btn_entrarApp')

        // → outros els: selecionado
        let $conectando = $('#conectando'),
            $conectado = $('#conectado')

        // → Eventos/Ouvintes (testando métodos diferens de chamadas de função com parâmetros)
        $btn_entrarApp.on("click", $btn_entrarApp,function(){app.altElEfects(
            'fadeOutUp',
            $('.app'),
            'fadeIn',
            $('.homePage')
        )})

        console.log('::Web/App:: AddOuvintes: Ok')

        $conectando.css('display', 'none')
        $conectado.css('display', 'block')
        $btn_entrarApp.css('display', 'block')

        elH4 = $('#h4')
        elH5 = $('#h5')
        var x = [ elH4, elH5]
        app.altEl(x)
    },
    altElEfects: function(_efeitoIn, _ocultar, _efeitoOut, _mostrar){

            _ocultar.addClass(_efeitoIn)
            console.log('::Web/App:: fadeOutPut Aplicado à class: .app')
            setTimeout(function () {
            console.log('::Web/App:: dois seg  depois set=>"display none" à class: .app')
            _ocultar.css('display', 'none')
            _mostrar.css('display', 'grid')
            _mostrar.addClass(_efeitoOut)
        }, 900);
    },
    altEl: function(_ocultar){
        for (i=0; i<_ocultar.length; i++) {
            console.log(_ocultar[i])
            _ocultar[i].css('backgroundColor', 'red')
        }
    }
}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init)
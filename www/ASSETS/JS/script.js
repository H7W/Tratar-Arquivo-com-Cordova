/* Descrição deste arquivo script.js

    * O objetivo desse script é:
    * 1. Da suporte para index.css, ajudando a deixar o leiute mais interativo e animado
    * 2. reponsável pela a navegação entre as páginas/locais do app.
    * 3. responsável por animações junto com a biclioteca anime.my.1.0.0.js.
        => link ultíl: https://www.theappguruz.com/tag-tools/web/CSSAnimations/
*/
    console.log('Dispositivo | Web | build: 14/15');
    const app = {
        init: () => {
            setTimeout(function () {
                console.log('tratarArquivo | App | inicializado')
                app.addListeners()
            }, 1000);
        },
        addListeners: () => {

            let $btn_entrarApp          = $('#btn_entrarApp'),
                $devlopPage             = $('#devlopPage'),
                $conectando             = $('#conectando'),
                $conectado              = $('#conectado')

                $btn_entrarApp.on("click", $btn_entrarApp,function(){app.altElEfects('fadeOutUp', $('.app'), 'fadeIn',$('.homePage'))}) // → ocultar a el.app e mostrar el.homePage
                $devlopPage.on("click", $devlopPage,function(){app.altElEfects('fadeOutUp', $('.homePage'), 'fadeIn',$('.app'))}) // → ocultar a el.app e mostrar el.homePage

            var ocultarEls = [$conectando]
            var mostrarEls = [$btn_entrarApp, $conectado]
            app.altEl(ocultarEls, mostrarEls)
        },
        altElEfects: function(_efeitoIn, _ocultar, _efeitoOut, _mostrar){
            _ocultar.addClass(_efeitoIn)
            setTimeout(function () {
                _ocultar.css('display', 'none')
                _mostrar.css('display', 'grid')
                _mostrar.addClass(_efeitoOut)
                setTimeout(function () {
                    _ocultar.removeClass(_efeitoIn)
                    _mostrar.removeClass(_efeitoOut)
                }, 1200)
            }, 900)
        },
        altEl: function(_ocultar, _mostrar){
            // ocultar
            for (i=0; i<_ocultar.length; i++) {
                // console.log(_ocultar[i])
                _ocultar[i].css('display', 'none');
            }
            // mostrar
            for (i=0; i<_mostrar.length; i++) {
                // console.log(_mostrar[i])
                _mostrar[i].css('display', 'block');
            }
        }
    }
    const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
    document.addEventListener(ready, app.init)

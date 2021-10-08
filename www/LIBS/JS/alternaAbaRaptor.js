jQuery(function ($) {
    $.fn.alternaAbaRaptor = function(_selc, _painel, activePainel, _envelope) {
        $(this).on('click', function(e) {
                e.stopPropagation();
                e.preventDefault()

                // var tab_A1 = $(e.target).closest(".tab-A1").attr("class")
                // → -1.00 Obtém o elemento selecionado/cliclado
                let la = $(this)

                // → correção ↓
                // → -1.01 obtém as classes do elemento selecionado em -1.00
                let lb = la.attr('class')

                // → -1.02 obtém a primeira classe do elemento selecionado em -1.01 através do método split
                let lc =  lb.split(' ')[0]

                // → -1.03 obtém o valor do atributo do elemento selecionado em -1.00.
                let ld = la.data('tab')

                // → -1.04 retorna o elemento que tem  o atributo data-tab igual o let 'ld' em -1.03, mais a class amargenada no let 'lc' em -1.02.
                let le = $('.'+lc+'[data-tab="'+ld+'"]')

                // → -1.05 alterna uma class qualquer passada no parâmetro _selc, esse elemento que tem a class alternada está no let 'le' em -1.04.
                let lf = le.toggleClass(_selc)

                // → -1.06 remove uma class qualquer passada no parâmetro _selc de todos os elementos que a tenham, ou seja, todos os elementos da class que está no let lc cujos os data-tab não são correlatos ao que está no let ld.
                let lg = $('.'+lc).not('[data-tab="'+ld+'"]').removeClass(_selc)

                //! ↓ encontrar painel correlato ↓

                // → 1.07 encontrar Painel correlato, através do parâmetro _painel
                let li = $('.'+_painel+'[data-painel="'+ld+'"]')
                // console.log('↓ li ↓')
                // console.log(li)


                // → -1.07 alterna uma class qualquer passada no parâmetro activePainel, esse elemento que tem a class alternada está no let 'li' em -1.07.
                let lj = li.toggleClass(activePainel)
                // console.log('↓ lj ↓')
                // console.log(lj)

                // → -1.08 remove uma class qualquer passada no parâmetro activePainel de todos os elementos que a tenham, ou seja, todos os elementos da class que está no let lc cujos os data-painel não são correlatos ao que está no let li.
                let lk = $('.'+_painel).not('[data-painel="'+ld+'"]').removeClass(activePainel)
                // console.log('↓ lk ↓')
                // console.log(lk)


        })
    };
$.fn
});

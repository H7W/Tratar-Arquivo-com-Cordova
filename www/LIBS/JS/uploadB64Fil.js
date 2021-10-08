let $inNovImagem = $('#inNovImagem'),
$srcNovImg   = $('.srcNovImg'),
$inNovDoc_nomeImg    = $('#inNovDoc_nomeImg'),
$inNovDoc_tamanhoImg = $('#inNovDoc_tamanhoImg'),
$inNovDoc_tipoImg    = $('#inNovDoc_tipoImg'),
$inNovDoc_dtModImg   = $('#inNovDoc_dtModImg')


$inNovImagem.change(function (e) {
    uploadB64Fil($(this),
        $srcNovImg,
        $inNovDoc_nomeImg,
        $inNovDoc_tamanhoImg,
        $inNovDoc_tipoImg,
        $inNovDoc_dtModImg
    )
})

function uploadB64Fil(_inputFile, _inputSrc, _inputName, _inputTamanho, _inputTipo, _lastMod) {
    if (_inputFile.prop('files')[0] && _inputFile.prop('files')[0]) {
        var FR = new FileReader();
        FR.addEventListener("load", function(e) {
            $srcNovImg.attr('src', e.target.result)
            // var retornar =  e.target.result
           return e.target.result
        })
        FR.readAsDataURL(_inputFile.prop('files')[0])
        console.log((_inputFile.prop('files')[0]))
        _inputName.html(_inputFile.prop('files')[0].name)
        _inputTamanho.html((_inputFile.prop('files')[0].size))
        _inputTipo.html((_inputFile.prop('files')[0].type))
        _lastMod.html((_inputFile.prop('files')[0].lastModifiedDate))
        // _lastMod.html(formatarDataDayFull((_inputFile.prop('files')[0].lastModified,'PT')))
    }
}
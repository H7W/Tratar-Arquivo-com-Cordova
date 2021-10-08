
    console.log('Dispositivo Movel. build: 14/15');
        const app = {
            permissions: null,
            init: () => {
                setTimeout(function () {
                    console.log('App inicializado')
                    console.log("Sistema de arquivos / plugin está pronto");
                    app.addListeners()
                    app.carregarPerms()
                    // app.entrarApp()
                }, 1000);
            },
            addListeners: () => {
                app.permissions = cordova.plugins.permissions;
                console.log(app.permissions);
                // $('#btn_getPermCam').on('click', app.camPerm),
                let $btn_getPermCam         = $('#btn_getPermCam'),
                    $btn_getPermWriteArmEx  = $('#btn_getPermWriteArmEx'),
                    $btn_entrarApp          = $('#btn_entrarApp'),
                    $btn_fazerDownload      = $('#btn_fazerDownload'),
                    $devlopPage             = $('#devlopPage'),
                    $conectando             = $('#conectando'),
                    $conectado              = $('#conectado')

                    $btn_getPermCam.on('click', app.camPerm)
                    $btn_getPermWriteArmEx.on('click', app.ArmzExtPerm)
                    $btn_entrarApp.on("click", $btn_entrarApp,function(){app.altElEfects('fadeOutUp', $('.app'), 'fadeIn',$('.homePage'))}) // → ocultar a el.app e mostrar el.homePage
                    $devlopPage.on("click", $devlopPage,function(){app.altElEfects('fadeOutUp', $('.homePage'), 'fadeIn',$('.app'))}) // → ocultar a el.app e mostrar el.homePage
                    $btn_fazerDownload.on("click", $btn_fazerDownload,function(){app.download()})


                var ocultarEls = [$conectando]
                var mostrarEls = [$btn_entrarApp, $conectado]
                app.altEl(ocultarEls, mostrarEls)

                // console.log('addListeners criados')
            },
            carregarPerms:function(){
                var $permCamStatus = $('#permCamStatus'),
                    $permCamWriteArmEx = $('#permCamWriteArmEx'),
                    $permReadExtStorage = $('permReadExtStorage')

                app.permissions.checkPermission("android.permission.CAMERA", function (status) {
                        $permCamWriteArmEx = $('#permCamWriteArmEx')
                    if (!status.hasPermission) {
                        $permCamStatus.html('Camera | Não Permitido')
                    } else {
                        $permCamStatus.html('Camera | Permitido')
                    }
                    }, function (err) {
                        $permCamStatus.html('Erro!')
                        console.log(err)
                })
                app.permissions.checkPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
                        $permCamWriteArmEx = $('#permCamWriteArmEx')
                    if (!status.hasPermission) {
                        $permCamWriteArmEx.html('Escrever Armaz. Externo | Não Permitido')
                    } else {
                        $permCamWriteArmEx.html('Escrever Armaz. Externo | Permitido')
                    }
                 }, function (err) {
                    $permCamStatus.html('Erro!')
                    console.log(err)
                }),
                app.permissions.checkPermission("android.permission.READ_EXTERNAL_STORAGE", function (status) {
                        $permReadExtStorage = $('#permReadExtStorage')
                    if (!status.hasPermission) {
                        $permReadExtStorage.html('Ler Armaz. Externo | Não Permitido')
                    } else {
                        $permReadExtStorage.html('Ler Armaz. Externo | Permitido')
                    }
                 }, function (err) {
                    $permCamStatus.html('Erro!')
                    console.log(err)
                })
            },
            camPerm: function () {
                // alert('verificando a permissão do Armaz. Externo')
                // console.log('verificando a permissão do Armaz. Externo')
                app.permissions.checkPermission("android.permission.CAMERA", function (status) {
                    // console.log('Permissão para a Armazenamento Externo:', status.hasPermission)
                    if (!status.hasPermission) {
                        app.permissions.requestPermission("android.permission.CAMERA", function (status) {
                            app.carregarPerms()
                        }, function (err) {
                        });
                    }
                }, function (err) {
                    console.log(err);
                })
            },
            ArmzExtPerm: function () {
                app.permissions.checkPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
                    // console.log('verificando a permissão do Armaz. Externo')
                    // console.log('Permissão para a Armazenamento Externo:', status.hasPermission)
                    if (!status.hasPermission) {
                        app.permissions.requestPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
                            // console.log('solicitando permissão do Armazenamento Externo');
                            app.carregarPerms()
                        }, function (err) {
                            // console.log('Falha ao definir a permissão');
                        });
                    }
                }, function (err) {
                    console.log(err);
                })
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
            },
            download: function(){
                var fileTransfer = new FileTransfer()
                console.log(fileTransfer)

                // var uri = encodeURI("https://diariodorio.com/wp-content/uploads/2020/07/Pedra_da_gavea_capa.jpg")
/* !@download encodeURI .json → */ var uri = encodeURI("data:text/json;charset=utf-8,%7B%22tb_registry%22%3A%5B%7B%22id_docs%22%3A1%2C%22name%22%3A%22Maria%20Anders%22%2C%22age%22%3A10%7D%2C%7B%22id_docs%22%3A2%2C%22name%22%3A%22Dominick%20Guercio%22%2C%22age%22%3A20%7D%2C%7B%22id_docs%22%3A3%2C%22name%22%3A%22Columbus%20Romo%22%2C%22age%22%3A30%7D%2C%7B%22id_docs%22%3A4%2C%22name%22%3A%22Josphine%20Musson%22%2C%22age%22%3A40%7D%2C%7B%22id_docs%22%3A5%2C%22name%22%3A%22Clarissa%20Slocumb%22%2C%22age%22%3A50%7D%5D%2C%22tb_courses%22%3A%5B%7B%22id_courses%22%3A1%2C%22courses%22%3A%22HTML%205%22%2C%22duration%22%3A5%7D%2C%7B%22id_courses%22%3A2%2C%22courses%22%3A%22PHP%22%2C%22duration%22%3A20%7D%2C%7B%22id_courses%22%3A3%2C%22courses%22%3A%22Javascript%22%2C%22duration%22%3A15%7D%2C%7B%22id_courses%22%3A4%2C%22courses%22%3A%22CSS%22%2C%22duration%22%3A4%7D%2C%7B%22id_courses%22%3A5%2C%22courses%22%3A%22Response%22%2C%22duration%22%3A2%7D%5D%7D")
                fileUrl = 'file:///storage/emulated/0/Android/data/br.com.tratarArquivos/ArquivoJsonTeste.json'
                fileTransfer.download(
                    uri,
                    fileUrl,
                    function(entry) {
                        let $imgResult           = document.getElementById('imgResult'),
                            $echo_caminhoArqu   = $('#echo_caminhoArqu'),
                            $status_downalod   = $('#status_downalod')

                        console.log("download completo: " + entry.toURL())
                        console.log('↓ imgResult ↓')
                        console.log(imgResult + entry.toURL())

                        $status_downalod.html("download completo: " + entry.toURL())
                        $echo_caminhoArqu.html(imgResult + entry.toURL())
                        $imgResult.src = entry.toURL()
                    },
                    function(error) {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("download error code" + error.code);
                    },
                    false,
                    {
                        headers: {
                            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                        }
                    }
                )
            }
        }
        const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
        document.addEventListener(ready, app.init)

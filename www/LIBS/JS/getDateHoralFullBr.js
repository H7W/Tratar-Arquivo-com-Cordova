function getDataHoraFullBR() {
    Number.prototype.padLeft = function(base,chr){
        var  len = (String(base || 10).length - String(this).length)+1;
        return len > 0? new Array(len).join(chr || '0')+this : this;
    }
    var datahora = new Date, dtTimeBR = [
           datahora.getDate(),
           (datahora.getMonth()+1).padLeft(),
           datahora.getFullYear()].join('/')+' '
    +[ datahora.getHours().padLeft(),
           datahora.getMinutes().padLeft(),
           datahora.getSeconds().padLeft()
    ].join(':')
    return dtTimeBR
}
function getDataBR() {
    Number.prototype.padLeft = function(base,chr){
        var  len = (String(base || 10).length - String(this).length)+1;
        return len > 0? new Array(len).join(chr || '0')+this : this;
    }
    var datahora = new Date, dtTimeBR = [
           datahora.getDate(),
           (datahora.getMonth()+1).padLeft(),
           datahora.getFullYear()].join('/')

    return dtTimeBR
}
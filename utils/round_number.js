exports.round = function (num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    if(isNaN(m)){
        return num;
    }else{
        return Math.round(m) / 100 * Math.sign(num);
    }
}
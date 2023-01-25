screen.fontSmoothingEnabled=false;

var cvsEff=document.getElementById('cvs').style;
var cvsX=0;
var cvsY=0;
var deg=0;
var effI=0;

var Effects = function(){
    effI++;
    var vibAmp = 3;
    
    cvsX=Math.floor(Math.random()*vibAmp*2)-vibAmp;
    cvsY=Math.floor(Math.random()*vibAmp*2)-vibAmp;
    deg=Math.cos(effI/20)*5;

    cvsEff.marginLeft=cvsX+'px';
    cvsEff.marginTop=cvsY+'px';
    cvsEff.transform='rotate('+deg+'deg)'
}
//Effects = function(){}
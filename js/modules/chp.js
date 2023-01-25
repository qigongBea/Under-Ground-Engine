//Combat hp display module. Displays the Player's HP during the combat sequence.
var Chp = (function()
{
    var hpText; //"HP" image that literally displays the letters 'H' and 'P' and nothing else.

    //Init
    function init()
    {
        hpText = document.getElementById("hp"); 
    }
    
    //Draw
    function draw(ctx, cur, max)
    {
        ctx.save();

        ctx.drawImage(
            hpText,
            244, 
            405);
        
        //Math.ceil(hp/200)
        document.getElementById('cvs').style.letterSpacing='0px';
        ctx.fillStyle = "#F00";
        ctx.fillRect(275, 400, Math.floor(max * 1.25)/Math.ceil(max/150), 21);
        ctx.fillStyle = "#FF0";
        ctx.fillRect(275, 400, Math.floor(cur * 1.25)/Math.ceil(max/150), 21);

        ctx.font = "24px Mars Needs Cunnilingus";
        ctx.fillStyle = "#FFF"; 
        ctx.fillText(plyrName+ "   lv " + lv, 31, 418);
        ctx.fillText(
            cur + " / " + max,
            289 + Math.floor(max * 1.25)/Math.ceil(max/150),
            418);
        ctx.restore();        
    }
    
    //Return
    return {
        init : init,
        draw : draw
    }
}());
//Inventory module
var Inventory = (function()
{
    var items = []; //List of items.
    
    //Init
    function init()
    {
        items = 
        [
            new Item(
                "派", 
                '奶油糖果派',
                "* 你吃掉了派.\n派的香味使你想起了托丽尔.* 你的HP回满了.",
                function(){Player.heal(Player.getHPMax())}),
            new Item(
                "脸排", 
                '镁塔顿脸型的牛排',
                function(){
                    if(Player.getHPMax()-Player.getHPCur()<60)return"* 你吃掉了镁塔顿的脸……形状的牛排.\n收视率……啊没有呢.* 你回复了60HP."
                    else return"* 你吃掉了镁塔顿的脸……形状的牛排.\n收视率……啊没有呢.* 你的HP回满了."
                }(),
                function(){Player.heal(60)}),
        ]
    }
    
    //Getter for a list of item names.
    function getNames()
    {
        var names = [];
        for(var i = 0; i < items.length; i++)
        {
            if(seriousMode)names.push(items[i].seriousName);
            else names.push(items[i].normName);
        }
        return names;
    }
    
    //Getter for the text of an item at an index.
    function getText(index)
    {
        return items[index].textDefault;
    }
    
    //Getter for the number of items.
    function getLength()
    {
        return items.length;
    }
    
    //Remove an item at an index.
    function removeItem(index)
    {
        items.splice(index, 1);
    }

    function getItem(item)
    {
        items.push(item);
    }
    
    //Activate an item at an index.
    function activate(index)
    {
        items[index].activate();
    }
    
    //Return
    return{
        init : init,
        getNames : getNames,
        getText : getText,
        getLength : getLength,
        removeItem : removeItem,
        activate : activate,
        getItem:getItem
    }
}());
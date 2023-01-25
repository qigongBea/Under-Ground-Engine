//Item class.
var Item = function(seriousName,normName, textDefault, action)
{
    this.seriousName = seriousName;                   //Name of the item.
    this.normName=normName;
    this.textDefault = textDefault;     //Text that displays when the item is used.
    this.action = action;               //Action of the item.
}

//Perform the action of the object.
Item.prototype.activate = function()
{
    this.action();
}
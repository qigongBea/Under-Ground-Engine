//Enemy Constructor
var Cenemy = function(pos)
{
    this.name = "癌死丽儿·猪萌";
    var thisName = this.name;
    this.texts = ["* 中文文本!\n中文换行 And English Text!* English \\n!"];
    this.speech = ["Fu*k", "草.", "氧化钙."];
    this.acts = ["检查", "选项", "???"];
    this.ress = [
        "* " + this.name + "  INF ATK INF DEF * 最困难的敌人.",
        "* 还没有东西(",
        "* JXU2MjExJXU4MzQ5JXVGRjAx"];
    this.ressFunctions = [
        function()
        {
            console.log(thisName+" 行动1");
        },
        function()
        {
            console.log(thisName+" 行动2");
        },
        function()
        {
            console.log(thisName+" 行动3");
        }];
    this.atk = 5;
    this.def = 6666;
    this.maxHP = 999999999;
    this.curHP = 999999999;
    this.defense = 10;
    this.damageVel = 120;
    this.damagePos = pos;
    this.bubblePos = pos.getAdd(new Vect(80, -80, 0));
    this.bubbleOff = 30;
    this.active = false;
    this.modelPoses = [];
    this.animations = [];
}

//Add an animtion
Cenemy.prototype.addAnimation = function(text, pos)
{
    this.active = true;
    this.modelPoses.push(pos);
    var anim = JSON.parse(text);
    if(anim.image_id == "asriel")
    {
        this.animations.push(new AnimationNum(anim, this.name));
    }
    else
    {
        this.animations.push(new Animation(anim));
    }
    this.sortAnimations();
}

//Sort animations
Cenemy.prototype.sortAnimations = function()
{
    for(var i = this.animations.length - 1; i > 0; i--)
    {
        if(this.animations[i].zindex > this.animations[i - 1].zindex)
        {
            var temp = this.animations[i];
            this.animations[i] = this.animations[i - 1];
            this.animations[i - 1] = temp;
        }    
    }
}

//Update
Cenemy.prototype.update = function(dt)
{
    if(this.active)
    {
        for(var i = 0; i < this.animations.length; i++)
        {
            this.animations[i].update(dt);
        }
    }
}

//Draw
Cenemy.prototype.draw = function(ctx)
{
    if(this.active)
    {
        for(var i = 0; i < this.animations.length; i++)
        {
            ctx.save();
            ctx.translate(this.modelPoses[i].x, this.modelPoses[i].y);
            this.animations[i].draw(ctx);
            ctx.restore();
        }
    }
}
var Cenemy2 = function(pos)
{
    this.name = "镁塔顿";
    var thisName = this.name;
    this.texts = ["* 中文文本!\n中文换行 And English Text!* English \\n!"];
    this.speech = ["Fu*k", "草.", "氧化钙."];
    this.acts = ["检查", "选项", "POSE"];
    this.ress = [
        "* " + this.name + "  10 ATK 6666 DEF * 你不知道铁盒子以【【糕防御】】著称吗?",
        "* 还没有东西(",
        "* 你摆出了动作. * 收视率上……啊这里没有收视率啊那没事了"];
    this.ressFunctions = [
        function()
        {
            console.log(thisName+" 行动1");
        },
        function()
        {
            console.log(thisName+" 行动2");
        },
        function()
        {
            console.log(thisName+" 行动3");
        }];
    this.atk = 5;
    this.def = 6666;
    this.maxHP = 100000000;
    this.curHP = 1000000;
    this.defense = 10;
    this.damageVel = 120;
    this.damagePos = pos;
    this.bubblePos = pos.getAdd(new Vect(80, -80, 0));
    this.bubbleOff = 30;
    this.active = false;
    this.modelPoses = [];
    this.animations = [];
}

//Add an animtion
Cenemy2.prototype.addAnimation = function(text, pos)
{
    this.active = true;
    this.modelPoses.push(pos);
    var anim = JSON.parse(text);
    if(anim.image_id == "mettaton")
    {
        this.animations.push(new AnimationNum(anim, this.name));
    }
    else
    {
        this.animations.push(new Animation(anim));
    }
    this.sortAnimations();
}

//Sort animations
Cenemy2.prototype.sortAnimations = function()
{
    for(var i = this.animations.length - 1; i > 0; i--)
    {
        if(this.animations[i].zindex > this.animations[i - 1].zindex)
        {
            var temp = this.animations[i];
            this.animations[i] = this.animations[i - 1];
            this.animations[i - 1] = temp;
        }    
    }
}

//Update
Cenemy2.prototype.update = function(dt)
{
    if(this.active)
    {
        for(var i = 0; i < this.animations.length; i++)
        {
            this.animations[i].update(dt);
        }
    }
}

//Draw
Cenemy2.prototype.draw = function(ctx)
{
    if(this.active)
    {
        for(var i = 0; i < this.animations.length; i++)
        {
            ctx.save();
            ctx.translate(this.modelPoses[i].x, this.modelPoses[i].y);
            this.animations[i].draw(ctx);
            ctx.restore();
        }
    }
}
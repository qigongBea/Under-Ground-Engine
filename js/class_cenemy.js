//Enemy Constructor
var Cenemy = function(pos)
{
    this.name = "癌死丽儿·猪萌";
    var thisName = this.name;
    this.texts = ["* 你振出局,杉白给了! |#F00三|#F80重|#FF0审|#0F0批|#0FF!|#F00\n* 癌丝丽儿踏马掏出了他的刀|#FFF……哦串台了不好\n意思这里不是A Dreemurr's Despair("];
    this.speech = ["Fu*k", "草.", "氧化钙."];
    this.acts = ["检查", function(){
        if(!seriousMode)return"严肃模式";
        else return "非严肃模式"
    }()];
    this.ress = [
        "* " + this.name + "  INF ATK INF DEF * 最 |#FF0困男♂|#FFF 的敌人.",
        function(){
            if(!seriousMode)return"* 严肃模式开启!";
            else return "* 严肃模式关闭!"
        }()];
    this.ressFunctions = [
        function()
        {
            console.log(thisName+" 行动1");
        },
        function()
        {
            seriousMode=!seriousMode;
            console.log(thisName+" 行动2");
        },
        function()
        {
            console.log(thisName+" 行动3");
            
        }];
    this.atk = 5;
    this.def = 6666;
    this.maxHP = 999999999;
    this.curHP = 99999999;
    this.defense = 10;
    this.damageVel = 120;
    this.damagePos = pos;
    this.bubblePos = pos.getAdd(new Vect(0, -160, 0));
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
    this.speech = ["Fu*k", "草.", "氧化钙."];
    this.acts = ["检查", "POSE"];
    this.ress = [
        "* " + this.name + "  10 ATK 6666 DEF * 你不知道铁盒子以【【糕防御】】著称吗?",
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
    this.maxHP = 200;
    this.curHP = 150;
    this.defense = 10;
    this.damageVel = 120;
    this.damagePos = pos;
    this.bubblePos = pos.getAdd(new Vect(80, -120, 0));
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
var Cenemy3 = function(pos)
{
    this.name = "纳普斯特";
    var thisName = this.name;
    this.speech = ["Fu*k", "草.", "氧化钙."];
    this.acts = ["检查", "鬼怪音乐"];
    this.ress = [
        "* " + this.name + "  ? ATK ? DEF * ……鬼怪无法受到物理伤害.",
        "* 你给纳普斯特播放了一首它的音乐. * 它看起来很满意.* (你得到了幽灵水果.)"];
    this.ressFunctions = [
        function()
        {
            console.log(thisName+" 行动1");
        },
        function()
        {
            Inventory.getItem(new Item(
                "鬼果", 
                '幽灵水果',
                function(){
                    if(Player.getHPMax()-Player.getHPCur()<16)return"* 你吃掉了幽灵水果.* 你回复了16HP."
                    else return"* 你吃掉了幽灵水果.* 你的HP回满了."
                }(),
                function(){Player.heal(16)}))
            console.log(thisName+" 行动2");
        },
        function()
        {
            console.log(thisName+" 行动3");
        }];
    this.atk = 5;
    this.def = 6666;
    this.maxHP = 100;
    this.curHP = 100;
    this.defense = 10;
    this.damageVel = 120;
    this.damagePos = pos;
    this.bubblePos = pos.getAdd(new Vect(80, -150, 0));
    this.bubbleOff = 30;
    this.active = false;
    this.modelPoses = [];
    this.animations = [];
}

//Add an animtion
Cenemy3.prototype.addAnimation = function(text, pos)
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
Cenemy3.prototype.sortAnimations = function()
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
Cenemy3.prototype.update = function(dt)
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
Cenemy3.prototype.draw = function(ctx)
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
//Cdefend constructor
var Cdefend = function()
{
    this.width = 140;
    this.height = 140;
}

//Setup
Cdefend.prototype.setup = function()
{
    this.durationCounter = 0;
    this.duration = 5.35;
}

//Update
Cdefend.prototype.update = function(dt)
{
    this.durationCounter += dt;
    return this.durationCounter > this.duration;
}

//Draw
Cdefend.prototype.draw = function(ctx)
{
    ctx.save();
    ctx.lineWidth = 3;
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.rect(
        350,
        0 + 140 * this.durationCounter,
        40,
        40);
    ctx.rect(
        240,
        0 + 150 * this.durationCounter,
        40,
        40);
    ctx.rect(
        340,
        0 + 110 * this.durationCounter,
        40,
        40);
    ctx.rect(
        260,
        0 + 120 * this.durationCounter,
        40,
        40);
    ctx.rect(
        380,
        0 + 225 * this.durationCounter,
        40,
        40);
    ctx.rect(
        320,
        0 + 180 * this.durationCounter,
        40,
        40);
    ctx.rect(
        290,
        0 + 200 * this.durationCounter,
        40,
        40);
    ctx.rect(
        480,
        0 + 75 * this.durationCounter,
        40,
        40);
    ctx.rect(
        490,
        0 + 100 * this.durationCounter,
        40,
        40);
    ctx.rect(
        180,
        0 + 115 * this.durationCounter,
        40,
        40);
    ctx.fill();
    ctx.stroke();
    ctx.restore(); 
}
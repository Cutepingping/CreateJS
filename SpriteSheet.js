/**
 * Created by Administrator on 2018/3/17.
 */
var stage;
stage = new createjs.Stage("gameView");
var ss = new createjs.SpriteSheet({
    "images":["spritsheet_grant.png"],
    "frames":{
        "height":292,
        "width":165,
        "count":64
    },
    "animations":{
        "run":[0,25,"jump"],
        "jump":[26,63,"run"]
    }
});
var s = new createjs.Sprite(ss,"run");
s.x = 100;
s.y = 100;
stage.addChild(s);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick",stage);
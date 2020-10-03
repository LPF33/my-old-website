"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.requestAnimationFrame =
    window.requestAnimationFrame || window.webkitRequestAnimationFrame;
var GameState;
(function (GameState) {
    GameState["start"] = "game-start";
    GameState["play"] = "while-playing";
    GameState["end"] = "game-over";
    GameState["level"] = "next-level";
    GameState["wait"] = "wait-a-second";
})(GameState || (GameState = {}));
var Direction;
(function (Direction) {
    Direction["left"] = "ArrowLeft";
    Direction["right"] = "ArrowRight";
})(Direction || (Direction = {}));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(canvasElement, state) {
        var _this = _super.call(this) || this;
        _this.animationID = 0;
        _this.points = 0;
        _this.savedPoints = 0;
        _this.keyPressed = { ArrowLeft: false, ArrowRight: false };
        _this.level = 1;
        _this.winStatus = false;
        _this.canvas = canvasElement.canvas;
        _this.ctx = canvasElement.ctx;
        _this.width = canvasElement.width;
        _this.height = canvasElement.height;
        _this.state = state;
        _this.invaders = new Invaders(_this.ctx, _this.width, _this.height, _this.level);
        _this.ship = new Ship(_this.ctx, _this.width, _this.height, _this.invaders.bombsDia);
        return _this;
    }
    Game.prototype.startScreen = function () {
        this.clearCanvas();
        _super.prototype.drawText.call(this, this.ctx, "Space Invaders", this.width / 2, this.height / 2, 30);
        _super.prototype.drawText.call(this, this.ctx, "Click or press a key to start", this.width / 2, this.height / 2 + 40, 20);
    };
    Game.prototype.countdown = function (seconds) {
        var _this = this;
        if (seconds === void 0) { seconds = 3; }
        this.clearCanvas();
        _super.prototype.drawText.call(this, this.ctx, String(seconds), this.width / 2, this.height / 2, 40);
        if (seconds > 0) {
            setTimeout(function () { return _this.countdown(--seconds); }, 1000);
        }
        else {
            this.playGame();
        }
    };
    Game.prototype.playGame = function () {
        var _this = this;
        this.clearCanvas();
        this.ship.draw(this.keyPressed, this.invaders.collision.bind(this.invaders));
        this.invaders.draw(this.ship.collision.bind(this.ship));
        this.showPoints();
        if (this.gameStatus()) {
            this.state = GameState.wait;
            this.endGame();
        }
        else {
            this.animationID = window.requestAnimationFrame(function () {
                return _this.playGame();
            });
        }
    };
    Game.prototype.showPoints = function () {
        this.points =
            this.savedPoints +
                (this.invaders.allInvaders - this.invaders.invadersCount) *
                    (10 * this.level);
        _super.prototype.drawText.call(this, this.ctx, "Level: " + this.level + " Points: " + this.points + " Lives: " + this.ship.lives, 10, 10, 10, "start");
    };
    Game.prototype.gameStatus = function () {
        if (this.ship.lives <= 0 || this.invaders.win >= 3) {
            this.winStatus = false;
            return true;
        }
        else if (this.invaders.invadersCount === 0) {
            this.winStatus = true;
            return true;
        }
        else {
            return false;
        }
    };
    Game.prototype.endGame = function () {
        var _this = this;
        var text;
        var text2;
        var text3;
        if (this.winStatus) {
            text = "You are a hero!";
            text2 = "Points: " + this.points + " Level: " + this.level;
            text3 = "Click or press a key to start next level!";
            setTimeout(function () { return (_this.state = GameState.level); }, 1000);
        }
        else {
            text = "The Invaders take the World! It's over!";
            text2 = "You lost in level " + this.level + "! Points: " + this.points;
            text3 = "Click or press a key to restart";
            setTimeout(function () { return (_this.state = GameState.end); }, 1000);
        }
        this.clearCanvas();
        _super.prototype.drawText.call(this, this.ctx, text, this.width / 2, this.height / 2, 30);
        _super.prototype.drawText.call(this, this.ctx, text2, this.width / 2, this.height / 2 + 40, 20, "center", "yellow");
        _super.prototype.drawText.call(this, this.ctx, text3, this.width / 2, this.height / 2 + 80, 20);
    };
    Game.prototype.levelUp = function () {
        this.savedPoints = this.points;
        this.level++;
        this.invaders.reset(this.level);
        this.ship.reset();
        this.state = GameState.play;
        this.countdown();
    };
    Game.prototype.endReset = function () {
        this.savedPoints = 0;
        this.level = 1;
        this.invaders.reset(1);
        this.ship.reset();
        this.state = GameState.play;
        this.countdown();
    };
    Game.prototype.keyDown = function (e) {
        if (this.state === GameState.start) {
            this.state = GameState.play;
            this.countdown();
        }
        else if (this.state === GameState.play) {
            e.preventDefault();
            if (e.key === Direction.left) {
                this.keyPressed.ArrowLeft = true;
            }
            else if (e.key === Direction.right) {
                this.keyPressed.ArrowRight = true;
            }
            else if (e.keyCode === 32 || e.key === " ") {
                this.ship.fireRocket();
            }
        }
        else if (this.state === GameState.end) {
            this.endReset();
        }
        else if (this.state === GameState.level) {
            this.levelUp();
        }
    };
    Game.prototype.keyUp = function (e) {
        if (this.state === GameState.play) {
            if (e.key === Direction.left) {
                this.keyPressed.ArrowLeft = false;
            }
            else if (e.key === Direction.right) {
                this.keyPressed.ArrowRight = false;
            }
        }
    };
    Game.prototype.touch = function (e) {
        this.pointer(e.touches[0].pageX);
    };
    Game.prototype.mouse = function (e) {
        e.preventDefault();
        this.pointer(e.clientX);
    };
    Game.prototype.pointer = function (posX) {
        var rect = this.canvas.getBoundingClientRect();
        var root = document.documentElement;
        var mouseX = posX - rect.left - root.scrollLeft;
        var direct = this.ship.mousePosition(mouseX);
        if (direct === Direction.left) {
            this.keyPressed.ArrowRight = false;
            this.keyPressed.ArrowLeft = true;
        }
        else if (direct === Direction.right) {
            this.keyPressed.ArrowRight = true;
            this.keyPressed.ArrowLeft = false;
        }
        else {
            this.keyPressed.ArrowRight = false;
            this.keyPressed.ArrowLeft = false;
        }
    };
    Game.prototype.pointerClick = function (e) {
        e.preventDefault();
        if (this.state === GameState.start) {
            this.state = GameState.play;
            this.countdown();
        }
        else if (this.state === GameState.play) {
            this.ship.fireRocket();
        }
        else if (this.state === GameState.end) {
            this.endReset();
        }
        else if (this.state === GameState.level) {
            this.levelUp();
        }
    };
    Game.prototype.clearCanvas = function () {
        _super.prototype.colorRect.call(this, this.ctx, 0, 0, this.canvas.width, this.canvas.height, "black");
    };
    return Game;
}(Graphics));
var canvas = new Canvas();
var game = new Game(canvas.getCanvas(), GameState.start);
game.startScreen();
window.addEventListener("keydown", game.keyDown.bind(game));
window.addEventListener("keyup", game.keyUp.bind(game));
window.addEventListener("mousemove", game.mouse.bind(game));
window.addEventListener("touchmove", game.touch.bind(game), { passive: false });
window.addEventListener("click", game.pointerClick.bind(game), {
    passive: false,
});
window.addEventListener("touchstart", game.pointerClick.bind(game), {
    passive: false,
});

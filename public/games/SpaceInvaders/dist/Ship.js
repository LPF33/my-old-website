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
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(ctx, x, y, diameter) {
        var _this = _super.call(this) || this;
        _this.shipWidth = 40;
        _this.shipHeight = 15;
        _this.shipSpeed = 2.5;
        _this.rocketDia = 3;
        _this.lastRocketFired = null;
        _this.rocketArr = [];
        _this.rocketSpeed = 3;
        _this.lives = 3;
        _this.ctx = ctx;
        _this.canvasWidth = x;
        _this.canvasHeight = y;
        _this.shipX = x / 2 - _this.shipWidth / 2;
        _this.shipY = y - _this.shipHeight - 10;
        _this.invaderBombsDia = diameter;
        return _this;
    }
    Ship.prototype.draw = function (moved, collision) {
        this.move(moved);
        var color = this.lives === 1 ? "violet" : "yellow";
        _super.prototype.colorRect.call(this, this.ctx, this.shipX, this.shipY, this.shipWidth, this.shipHeight, color);
        this.moveBomb(collision);
        for (var i = 0; i < this.rocketArr.length; i++) {
            _super.prototype.colorCirlce.call(this, this.ctx, this.rocketArr[i].x, this.rocketArr[i].y, this.rocketDia, "blue");
        }
    };
    Ship.prototype.move = function (moved) {
        if (moved.ArrowLeft) {
            this.shipX = this.shipX <= 0 ? 0 : this.shipX - this.shipSpeed;
        }
        else if (moved.ArrowRight) {
            this.shipX =
                this.shipX + this.shipWidth >= this.canvasWidth
                    ? this.canvasWidth - this.shipWidth
                    : this.shipX + this.shipSpeed;
        }
    };
    Ship.prototype.moveBomb = function (collision) {
        for (var i = 0; i < this.rocketArr.length; i++) {
            var rocket = this.rocketArr[i];
            rocket.y -= this.rocketSpeed;
            if (rocket.y < 0) {
                this.rocketArr.splice(i--, 1);
            }
            if (collision(rocket.x, rocket.y)) {
                this.rocketArr.splice(i--, 1);
            }
        }
    };
    Ship.prototype.fireRocket = function () {
        if (this.lastRocketFired === null ||
            Date.now() - this.lastRocketFired > 100) {
            this.lastRocketFired = Date.now();
            var newRocket = {
                x: this.shipX + this.shipWidth / 2,
                y: this.shipY,
            };
            this.rocketArr.push(newRocket);
        }
    };
    Ship.prototype.collision = function (x, y) {
        for (var i = 0; i < this.rocketArr.length; i++) {
            var rocket = this.rocketArr[i];
            var distance_2 = Math.pow(x - rocket.x, 2) + Math.pow(y - rocket.y, 2);
            var distance = Math.sqrt(distance_2);
            if (distance < this.rocketDia + this.invaderBombsDia) {
                this.rocketArr.splice(i, 1);
                return true;
            }
        }
        if (x >= this.shipX &&
            x <= this.shipX + this.shipWidth &&
            y >= this.shipY &&
            y <= this.shipY + this.shipHeight) {
            this.lives--;
            return true;
        }
        else {
            return false;
        }
    };
    Ship.prototype.mousePosition = function (x) {
        if (x < this.shipX) {
            return Direction.left;
        }
        else if (x >= this.shipX && x <= this.shipX + this.shipWidth) {
            return "";
        }
        else {
            return Direction.right;
        }
    };
    Ship.prototype.reset = function () {
        this.shipX = this.canvasWidth / 2 - this.shipWidth / 2;
        this.shipY = this.canvasHeight - this.shipHeight - 10;
        this.lastRocketFired = null;
        this.rocketArr = [];
        this.lives = 3;
    };
    return Ship;
}(Graphics));

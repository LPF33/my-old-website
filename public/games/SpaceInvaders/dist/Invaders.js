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
var Invaders = /** @class */ (function (_super) {
    __extends(Invaders, _super);
    function Invaders(ctx, x, y, level) {
        var _this = _super.call(this) || this;
        _this.invaderCols = 15;
        _this.invaderRows = 4;
        _this.invaderWidth = 20;
        _this.invaderArr = [];
        _this.allInvaders = 0;
        _this.invadersCount = 0;
        _this.invadersDistance = { x: 0, y: 0 };
        _this.invadersSpeed = { x: -0.7, y: 0.5 };
        _this.win = 0;
        _this.lastBombFired = null;
        _this.bombSpeed = 3;
        _this.bombsDia = 2;
        _this.bombsArr = [];
        _this.attackers = [];
        _this.ctx = ctx;
        _this.canvasWidth = x;
        _this.canvasHeight = y;
        _this.level = level;
        _this.init();
        return _this;
    }
    Invaders.prototype.draw = function (collision) {
        var leftSideTurn = false, rightSideTurn = false, invadersLanded = false;
        for (var row = 0; row < this.invaderRows; row++) {
            for (var col = 0; col < this.invaderCols; col++) {
                var arrayIndex = this.rowColToArrayIndex(col, row);
                if (this.invaderArr[arrayIndex]) {
                    _super.prototype.colorRect.call(this, this.ctx, this.invaderWidth * col + this.invadersDistance.x, this.invaderWidth * row + this.invadersDistance.y, this.invaderWidth - 10, this.invaderWidth - 10, "red");
                    if (this.invaderWidth * (col + 1) +
                        this.invadersDistance.x -
                        10 >=
                        this.canvasWidth) {
                        rightSideTurn = true;
                    }
                    else if (this.invaderWidth * col + this.invadersDistance.x <=
                        0) {
                        leftSideTurn = true;
                    }
                    else if (this.invaderWidth * (row + 1) +
                        this.invadersDistance.y >=
                        this.canvasHeight - 20) {
                        invadersLanded = true;
                    }
                }
            }
        }
        if (leftSideTurn) {
            this.invadersSpeed.y = 0.5;
            this.invadersSpeed.x *= -1;
        }
        else if (rightSideTurn) {
            this.invadersSpeed.y = 0.5;
            this.invadersSpeed.x *= -1;
        }
        else if (this.invadersDistance.y &&
            this.invadersDistance.y % 20 === 0) {
            this.invadersSpeed.y = 0;
        }
        if (invadersLanded) {
            this.win = 3;
        }
        this.invadersDistance.x += this.invadersSpeed.x;
        this.invadersDistance.y += this.invadersSpeed.y;
        this.fireBomb();
        this.moveBomb(collision);
        for (var i = 0; i < this.bombsArr.length; i++) {
            _super.prototype.colorCirlce.call(this, this.ctx, this.bombsArr[i].x, this.bombsArr[i].y, this.bombsDia, "pink");
        }
    };
    Invaders.prototype.fireBomb = function () {
        if (this.lastBombFired === null ||
            Date.now() - this.lastBombFired > 400) {
            this.lastBombFired = Date.now();
            var randomInvader = this.attackers[Math.floor(Math.random() * this.attackers.length)];
            if (this.invaderArr[randomInvader]) {
                var _a = this.indexToColRow(randomInvader), col = _a[0], row = _a[1];
                var newBomb = {
                    x: this.invaderWidth * (col + 0.5) -
                        5 +
                        this.invadersDistance.x,
                    y: this.invaderWidth * (row + 1) -
                        10 +
                        this.invadersDistance.y,
                };
                this.bombsArr.push(newBomb);
            }
        }
    };
    Invaders.prototype.moveBomb = function (collision) {
        for (var i = 0; i < this.bombsArr.length; i++) {
            var bomb = this.bombsArr[i];
            bomb.y += this.bombSpeed;
            if (bomb.y >= this.canvasHeight) {
                this.bombsArr.splice(i--, 1);
            }
            if (collision(bomb.x, bomb.y)) {
                this.bombsArr.splice(i--, 1);
            }
        }
    };
    Invaders.prototype.collision = function (rocketX, rocketY) {
        var rocketCol = Math.floor((rocketX - this.invadersDistance.x) / this.invaderWidth);
        var rocketRow = Math.floor((rocketY - this.invadersDistance.y) / this.invaderWidth);
        if (rocketCol >= 0 &&
            rocketCol < this.invaderCols &&
            rocketRow >= 0 &&
            rocketRow < this.invaderRows) {
            var index = this.rowColToArrayIndex(rocketCol, rocketRow);
            if (this.invaderArr[index]) {
                var attackIndex = this.attackers.indexOf(index);
                if (attackIndex !== -1) {
                    this.newAttacker(rocketCol, rocketRow, index, attackIndex);
                }
                this.invaderArr[index] = false;
                this.invadersCount--;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    Invaders.prototype.newAttacker = function (col, row, index, attackIndex) {
        row--;
        while (row >= 0) {
            var newIndex = this.rowColToArrayIndex(col, row);
            if (this.invaderArr[newIndex]) {
                this.attackers.splice(attackIndex, 1, newIndex);
                return;
            }
            row--;
        }
        this.attackers.splice(attackIndex, 1);
    };
    Invaders.prototype.indexToColRow = function (index) {
        var row = Math.floor(index / this.invaderCols);
        var col = Math.floor(index % this.invaderCols);
        return [col, row];
    };
    Invaders.prototype.rowColToArrayIndex = function (col, row) {
        return col + this.invaderCols * row;
    };
    Invaders.prototype.init = function () {
        this.invaderRows += this.level;
        this.allInvaders = this.invaderCols * this.invaderRows;
        for (var i = 0; i < this.invaderCols * this.invaderRows; i++) {
            this.invaderArr[i] = true;
            this.invadersCount++;
            if (i > this.invaderCols * (this.invaderRows - 1) - 1) {
                this.attackers.push(i);
            }
        }
    };
    Invaders.prototype.reset = function (level) {
        this.level = level;
        this.invaderRows = 4;
        this.invadersCount = 0;
        this.attackers = [];
        this.bombsArr = [];
        this.invadersDistance = { x: 0, y: 0 };
        this.invadersSpeed = { x: -(0.7 + 0.2 * level), y: 0.5 };
        this.win = 0;
        this.init();
    };
    return Invaders;
}(Graphics));

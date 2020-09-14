"use strict";
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.width = 0;
        this.height = 0;
        this.setCanvasSize();
    }
    Canvas.prototype.setCanvasSize = function () {
        this.canvas.width = window.innerWidth >= 600 ? 600 : window.innerWidth;
        this.canvas.height =
            window.innerHeight >= 400 ? 400 : window.innerHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    };
    Canvas.prototype.getCanvas = function () {
        return {
            canvas: this.canvas,
            ctx: this.ctx,
            width: this.width,
            height: this.height,
        };
    };
    return Canvas;
}());

"use strict";
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.prototype.colorRect = function (ctx, tolLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fillRect(tolLeftX, topLeftY, boxWidth, boxHeight);
    };
    Graphics.prototype.colorCirlce = function (ctx, centerX, centerY, radius, fillColor) {
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
    };
    Graphics.prototype.drawText = function (ctx, showWords, textX, textY, fontSize, align, color) {
        if (align === void 0) { align = "center"; }
        if (color === void 0) { color = "white"; }
        ctx.font = fontSize + "px Arial";
        ctx.fillStyle = color;
        ctx.textBaseline = "middle";
        ctx.textAlign = align;
        ctx.fillText(showWords, textX, textY);
    };
    return Graphics;
}());

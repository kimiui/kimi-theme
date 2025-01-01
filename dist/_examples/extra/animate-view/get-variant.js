"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariant = getVariant;
var animate_1 = require("lib/components/animate");
// ----------------------------------------------------------------------
function getVariant(variant, distance) {
    if (variant === void 0) { variant = 'slideInUp'; }
    if (distance === void 0) { distance = 160; }
    return {
        // Slide
        slideInUp: (0, animate_1.varSlide)({ distance: distance }).inUp,
        slideInDown: (0, animate_1.varSlide)({ distance: distance }).inDown,
        slideInLeft: (0, animate_1.varSlide)({ distance: distance }).inLeft,
        slideInRight: (0, animate_1.varSlide)({ distance: distance }).inRight,
        slideOutUp: (0, animate_1.varSlide)({ distance: distance }).outUp,
        slideOutDown: (0, animate_1.varSlide)({ distance: distance }).outDown,
        slideOutLeft: (0, animate_1.varSlide)({ distance: distance }).outLeft,
        slideOutRight: (0, animate_1.varSlide)({ distance: distance }).outRight,
        // Fade
        fadeIn: (0, animate_1.varFade)().in,
        fadeInUp: (0, animate_1.varFade)({ distance: distance }).inUp,
        fadeInDown: (0, animate_1.varFade)({ distance: distance }).inDown,
        fadeInLeft: (0, animate_1.varFade)({ distance: distance }).inLeft,
        fadeInRight: (0, animate_1.varFade)({ distance: distance }).inRight,
        fadeOut: (0, animate_1.varFade)({ distance: distance }).out,
        fadeOutUp: (0, animate_1.varFade)({ distance: distance }).outUp,
        fadeOutDown: (0, animate_1.varFade)({ distance: distance }).outDown,
        fadeOutLeft: (0, animate_1.varFade)({ distance: distance }).outLeft,
        fadeOutRight: (0, animate_1.varFade)({ distance: distance }).outRight,
        // Zoom
        zoomIn: (0, animate_1.varZoom)({ distance: 80 }).in,
        zoomInUp: (0, animate_1.varZoom)({ distance: 80 }).inUp,
        zoomInDown: (0, animate_1.varZoom)({ distance: 80 }).inDown,
        zoomInLeft: (0, animate_1.varZoom)({ distance: 240 }).inLeft,
        zoomInRight: (0, animate_1.varZoom)({ distance: 240 }).inRight,
        zoomOut: (0, animate_1.varZoom)().out,
        zoomOutLeft: (0, animate_1.varZoom)().outLeft,
        zoomOutRight: (0, animate_1.varZoom)().outRight,
        zoomOutUp: (0, animate_1.varZoom)().outUp,
        zoomOutDown: (0, animate_1.varZoom)().outDown,
        // Bounce
        bounceIn: (0, animate_1.varBounce)().in,
        bounceInUp: (0, animate_1.varBounce)().inUp,
        bounceInDown: (0, animate_1.varBounce)().inDown,
        bounceInLeft: (0, animate_1.varBounce)().inLeft,
        bounceInRight: (0, animate_1.varBounce)().inRight,
        bounceOut: (0, animate_1.varBounce)().out,
        bounceOutUp: (0, animate_1.varBounce)().outUp,
        bounceOutDown: (0, animate_1.varBounce)().outDown,
        bounceOutLeft: (0, animate_1.varBounce)().outLeft,
        bounceOutRight: (0, animate_1.varBounce)().outRight,
        // Flip
        flipInX: (0, animate_1.varFlip)().inX,
        flipInY: (0, animate_1.varFlip)().inY,
        flipOutX: (0, animate_1.varFlip)().outX,
        flipOutY: (0, animate_1.varFlip)().outY,
        // Scale
        scaleInX: (0, animate_1.varScale)().inX,
        scaleInY: (0, animate_1.varScale)().inY,
        scaleOutX: (0, animate_1.varScale)().outX,
        scaleOutY: (0, animate_1.varScale)().outY,
        // Rotate
        rotateIn: (0, animate_1.varRotate)().in,
        rotateOut: (0, animate_1.varRotate)().out,
        // Background
        kenburnsTop: (0, animate_1.varBgKenburns)().top,
        kenburnsBottom: (0, animate_1.varBgKenburns)().bottom,
        kenburnsLeft: (0, animate_1.varBgKenburns)().left,
        kenburnsRight: (0, animate_1.varBgKenburns)().right,
        panTop: (0, animate_1.varBgPan)().top,
        panBottom: (0, animate_1.varBgPan)().bottom,
        panLeft: (0, animate_1.varBgPan)().left,
        panRight: (0, animate_1.varBgPan)().right,
        color2x: (0, animate_1.varBgColor)(),
        color3x: (0, animate_1.varBgColor)({ colors: ['#19dcea', '#b22cff', '#ea2222'] }),
        color4x: (0, animate_1.varBgColor)({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10'] }),
        color5x: (0, animate_1.varBgColor)({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10', '#3bd80d'] }),
    }[variant];
}

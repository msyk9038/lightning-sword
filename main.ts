input.onGesture(Gesture.TiltRight, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Blue))
    range1.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onGesture(Gesture.TiltLeft, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Green))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onGesture(Gesture.LogoUp, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Red))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onGesture(Gesture.LogoDown, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let range1: neopixel.Strip = null
let range0: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
range0 = strip.range(0, 7)
range1 = strip.range(7, 8)

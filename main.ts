input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onGesture(Gesture.TiltLeft, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onGesture(Gesture.LogoUp, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.LogoDown, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)

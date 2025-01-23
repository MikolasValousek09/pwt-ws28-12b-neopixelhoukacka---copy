

let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)

let on = false;


input.onButtonPressed(Button.B, () => {
    on = false
})

input.onButtonPressed(Button.A, () => {
    on = true
})
function redLight(variant: number) {
    for (let i: number = 0; i < 8; i++) {
        if (i % 2 === variant) {
            strip.setPixelColor(i, neopixel.rgb(255, 0, 0))
        } else {
            strip.setPixelColor(i, neopixel.rgb(0, 0, 255))
        }
    }
}

function blackLight() {
    for (let i: number = 0; i < 8; i++) {
            strip.setPixelColor(i, neopixel.rgb(0, 0, 0))
    }
}

let variant = 0;

basic.forever(() => {
    strip.show()

    if ( on === false ) 
        blackLight()
    else
        redLight(variant);

    if (variant === 0) {
        variant = 1;
    } else {
        variant = 0;
    }

    basic.pause(300);
})

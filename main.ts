input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . . #
            # . # . .
            . # . # .
            . . # # #
            . . . # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    for (let Var = 0; Var <= 10; Var++) {
        basic.showNumber(Var)
    }
})
input.onButtonPressed(Button.AB, function () {
    let Grade = 0
    if (Grade >= 90) {
        basic.showString("Exellent")
    } else {
        if (Grade >= 50) {
            basic.showString("Pass")
            basic.showString("Fail")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Var += 1
    basic.showNumber(Var)
})
let Var = 0
basic.showString("Hello!")
basic.forever(function () {
	
})

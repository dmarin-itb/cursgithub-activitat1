basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("HOT!")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})

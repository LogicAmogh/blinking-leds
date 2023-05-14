function Yellow () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(50)
    }
}
function Green () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(50)
    }
}
function Red () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(50)
    }
}
basic.forever(function () {
    Red()
    Yellow()
    Green()
})

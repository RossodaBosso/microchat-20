enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue("Ross", 0)
    radio.sendString("How Are You?")
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("Ross", 12)
    radio.sendString("Hello!")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendValue("Ross", 12)
    radio.sendString("Good")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Ross", 0)
    radio.sendString("Bye")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(String2)
    basic.showString("Says")
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Ross", 12)
    radio.sendString(":)")
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("Ross", 12)
    radio.sendString("Bad")
})
radio.onReceivedValue(function (name, value) {
    String2 = name
})
let String2 = ""
led.plot(2, 2)
radio.setGroup(255)

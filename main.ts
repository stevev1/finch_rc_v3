function diff_steer () {
    x = Math.map(ax, -1023, 1023, 1, -1)
    y = Math.map(ay, -1023, 1023, 1, -1)
    radius = Math.sqrt(x * x + y * y)
    theta = Math.atan2(x, y) + 3.14159 / 4
    left = radius * Math.cos(theta)
    right = radius * Math.sin(theta)
    left = left * Math.sqrt(2)
    right = right * Math.sqrt(2)
    left = Math.max(-1, Math.min(left, 1))
    right = Math.max(-1, Math.min(right, 1))
    left = Math.map(left, -1, 1, -100, 100)
    right = Math.map(right, -1, 1, -100, 100)
}
radio.onReceivedValue(function (name, value) {
    if (name == "running") {
        running = value
    }
    if (name == "ax") {
        ax = value
    }
    if (name == "ay") {
        ay = value
    }
    diff_steer()
})
let running = 0
let ay = 0
let ax = 0
let right = 0
let left = 0
let y = 0
let x = 0
let theta = 0
let radius = 0
radio.setGroup(1)
finch.startFinch()
radius = 0
theta = 0
x = 0
y = 0
left = 0
right = 0
basic.forever(function () {
    if (running == 1) {
        basic.showIcon(IconNames.Happy)
        finch.startMotors(left, right)
    } else {
        basic.showIcon(IconNames.No)
        finch.startMotors(0, 0)
    }
})

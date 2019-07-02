var canvas = document.getElementById("canvas-practice")
var ctx = canvas.getContext("2d")

//MLDocument,X,Y Width, height
ctx.strokeRect(100, 100, 400, 400)

ctx.fillStyle = "orange"
ctx.fillRect(120, 120, 360, 360)

ctx.fillStyle = "white"
ctx.fillRect(140, 140, 320, 320)


function toRadians (degrees){ 
    return degrees * (Math.PI/180)
}


ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc(305, 270, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc(365, 270, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc(285, 270, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath
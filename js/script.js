let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0,0,600,600);

ctx.strokeStyle = "white";

let x = 30;
for(let i = 0; i < 20; i++){
	ctx.beginPath();
	ctx.moveTo(0, x);
	ctx.lineTo(600, x);
	ctx.stroke();

	x += 30;
}

let y = 30;
for(let i = 0; i < 20; i++){
	ctx.beginPath();
	ctx.moveTo(y, 0);
	ctx.lineTo(y, 600);
	ctx.stroke();
	y += 30;
}

let arr = [];
for (let i = 0; i < 30*30; i+=30){
	for (let j = 0; j < 30*30; j+=30){
		arr.push({x: i, y :j});
	}
}

ctx.fillStyle = "#2ecc71";
ctx.strokeStyle = "white";

$(".color").click(function(){
	ctx.fillStyle = `${$(this).attr("value")}`;
})

console.log(arr);
let bool = false;
$("canvas").on({
	mousedown: function(){
		bool = true;
	},
	mousemove: function(e){
		if (bool == true){
			// console.log(e);

			let x = e.clientX;
			let y = e.clientY;

			arr.forEach(function(i){
				if (x - 15 <= i.x && x + 15 >= i.x && y - 15 <= i.y && y + 15 >= i.y){
					// console.log(i.x, i.y);
					// ctx.fillStyle = "green";
					// ctx.strokeStyle = "white";
					ctx.fillRect(i.x - 30 , i.y - 30, 30, 30);
					ctx.strokeRect(i.x - 30, i.y - 30, 30, 30);
				}
			})
		}
	},
	mouseup: function(){
		bool = false;
	},
})

$(".clear").click(function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,600,600);

	ctx.fillStyle = "#2ecc71";
	ctx.strokeStyle = "white";

	let x = 30;
	for(let i = 0; i < 20; i++){
		ctx.beginPath();
		ctx.moveTo(0, x);
		ctx.lineTo(600, x);
		ctx.stroke();

		x += 30;
	}

	let y = 30;
	for(let i = 0; i < 20; i++){
		ctx.beginPath();
		ctx.moveTo(y, 0);
		ctx.lineTo(y, 600);
		ctx.stroke();
		y += 30;
	}
})
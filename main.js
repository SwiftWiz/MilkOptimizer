const fireHat = {
	name: "Malevolent Fire Hat",
	damage: 14,
	pips: 5,
	pierce: 3,
	resist: 7
}

const iceHat = {
	name: "Malevolent Fire Hat",
	damage: 10,
	pips: 5,
	pierce: 2,
	resist: 10
}


function changeMainSchool() {
	console.log(document.getElementById("user-main-school").value);
	const damageString = document.getElementById("user-main-school").value + "Hat";
	console.log(eval(damageString).damage);
	document.getElementById("damage").innerHTML = eval(damageString).damage;
}

function onLoad(){
	document.getElementById("damage").innerHTML = fireHat.damage;
}
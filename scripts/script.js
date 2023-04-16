

function updateTime() {
    let now = new Date();
    document.getElementById("time").innerHTML = now;
}

setInterval(updateTime, 1000)

let books = [
	{ "author": "Jared Diamond", "title": "Arm und Reich", "pages": 980 },
	{ "author" : "Barbara Tuchman", "title": "Der ferne Spiegel", "pages": 1020 },
	{ "author" : "Frank Schätzing", "title": "Das unbekannte Universum", "pages": 1143 }
];

console.table (books);

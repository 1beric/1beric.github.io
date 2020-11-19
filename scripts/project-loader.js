var projects = [
	["./images/gallery/code.png", "/projects/c--", "C-- Compiler"],
	["./images/gallery/beryl.png", "/projects/c--", "Beryl Engine"],
	["./images/gallery/milano-couch.png", "/projects/c--", "3D Modeling"],
	["./images/gallery/placeholder.png", "/projects/c--", "Rust Project"],
	["./images/gallery/placeholder.png", "/projects/c--", "Graphics Study"],
];

var wrapper = document.getElementById("projects-list");

function loadProjectImages() {
	for (index in projects) {
		loadProject(projects[index]);
	}
}

function loadProject(projectArr) {
	var div = document.createElement("div");
	var img = document.createElement("img");
	img.src = projectArr[0];
	img.addEventListener("click", () => {
		window.location.pathname = projectArr[1];
	});
	div.appendChild(img);
	var text = document.createElement("h2");
	text.textContent = projectArr[2];
	div.appendChild(text);
	wrapper.appendChild(div);
}

loadProjectImages();

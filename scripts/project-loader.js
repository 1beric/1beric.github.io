var projects = [
	["./images/gallery/code.png", "https://github.com/1beric/c--compiler_Rust", "C-- Compiler"],
	["./images/gallery/beryl.png", "https://github.com/1beric/BerylEngine", "Beryl Engine"],
	// ["./images/gallery/milano-couch.png", "/projects/c--", "3D Modeling"],
	["./images/gallery/placeholder.png", "https://github.com/1beric/insta", "Instagram Bot"],
	["./images/gallery/placeholder.png", "https://github.com/1beric/mastermind", "Mastermind"],
	["./images/gallery/placeholder.png", "https://osf.io/64m79/", "Nano2020"],
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
		window.location = projectArr[1];
	});
	div.appendChild(img);
	var text = document.createElement("h2");
	text.textContent = projectArr[2];
	div.appendChild(text);
	wrapper.appendChild(div);
}

loadProjectImages();

function loadtests() {

	document.getElementById('content').innerHTML = `

	<div id="levels">
	<div id="level1" onclick = "loadlvl1subs();">Level 1</div>
	<div id="level2">Level 2</div>
	<div id="level3">Level 3</div>
	<div id="level4">Level 4</div>
	<div id="level5">Level 5</div>
	</div>

	`; 
	
	document.getElementById('breakdown').innerHTML = `

	<button id="back"><-</button>
	<div id="level1c"></div>
	<div id="level2c"></div>
	<div id="level3c"></div>
	<div id="level4c"></div>
	<div id="level5c"></div>

	`;

}

function loadlvl1subs (){

	document.getElementById('levels').innerHTML= `

	<div id="level1">Level 1</div>
	<div id='lvl1sub'>Taxonomy</div>
	<div id ='lvl1sub'>Germ Theory</div>
	<div id='lvl1sub' >Cellular Anatomy<div>

	`
	document.getElementById('breakdown').innerHTML= `

	<button id="back"><-</button>
	<div id="lvl1subc">Taxonomy</div>
	<div id="lvl1subc">Germ Theory</div>
	<div id="lvl1subc">Cellular Anatomy</div>
	
	`
}
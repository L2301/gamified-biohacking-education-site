var counter 


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

	<button id="back" onclick="backbutton1();"><-</button>
	<div id="level1c"></div>
	<div id="level2c"></div>
	<div id="level3c"></div>
	<div id="level4c"></div>
	<div id="level5c"></div>

	`;
	counter = "1"

}

function loadlvl1subs(){

	document.getElementById('levels').innerHTML= `

	<div id="level1">Level 1</div>
	<div id='lvl1sub'>Taxonomy</div>
	<div id ='lvl1sub'>Germ Theory</div>
	<div id='lvl1sub' >Cellular Anatomy<div>

	`
	document.getElementById('breakdown').innerHTML= `

	<button id="backlvl1" onclick="loadtests();"><-</button>
	<div id="lvl1subc">Taxonomy</div>
	<div id="lvl1subc">Germ Theory</div>
	<div id="lvl1subc">Cellular Anatomy</div>
	
	`
	counter = "11"

}

function backbutton1(){

	if (counter.length = 1) {
		document.getElementById('bottom').innerHTML= `
				
				<div id="breakdown">

					<button id="back" onclick="backbutton();"><-</button>
					<p id="sidebar">filler</p>

				</div>

				<div id="content">
					
					<div id="test">

						<button id="testbutton" onclick="loadtests();">Test</button>
						
					</div>

					<div id="learn">
					
						<button id="learnbutton">Learn</button>
					
					</div>
					

				</div>`;
	}
}
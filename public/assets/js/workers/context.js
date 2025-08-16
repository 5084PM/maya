class RAF {

	constructor(func, interval) {
		const run = (time) => {
			requestAnimationFrame(run);
			func(time);
		};
		this.rafid = requestAnimationFrame(run);
	}

	pause() {

	}

	cancel() {

	}

}

function initialize(e) {

	console.log("worker initialized");

	const { port } = e.data;
    port.onmessage = function (e) { // (A)
        console.log("got further msgs");
    };

	function run(time) {
		//console.log("worker running");
		port.postMessage(['hello', 'world']);
	}

	const raf = new RAF(run);
}



self.addEventListener('message', function(e) {
    initialize(e);
});

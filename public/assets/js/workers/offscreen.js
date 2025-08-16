importScripts("canvas.js");

var canvas;


this.addEventListener("message", function(evt) {
	//console.log("worker", evt, Canvas);
	const evData = evt.data;

	if (evData.canvas) {
		canvas = Canvas.create(evData.canvas, { ratio: evData.ratio });
		return
	}

	if (evData.draw) {
		const { data, peaks, params } = evData.draw;

		canvas.plot(data, params);
		canvas.lines(peaks, params);
		canvas.clearGrid('h', 1);
	}

	//this.postMessage({ message: "plotted" });
});

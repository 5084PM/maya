var Canvas = (function (exports) {
	'use strict';

	class Canvas {

		static instance(canvas, opts) {
			if (canvas instanceof Canvas) {
				return canvas
			}
			return new Canvas(canvas, opts)
		}

		constructor(elem, { ratio }) {
			this.elem = elem;

			this.ctx = elem.getContext("2d", {
				alpha: true,
				desynchronized: true,
				preserveDrawingBuffer: true
			});

			this.ratio = ratio;

			this.ctx.scale(ratio, ratio);
	    	//this.ctx.commit()

			const { width, height } = elem;
			this.setSize(width, height);
		}


		setSize(w, h) {
			// element should not be resized here in case this is an offscreen canvas
			// and we are running in a worker
			this.width = w / this.ratio;
			this.height = h / this.ratio;
		}

		clear() {
			const { width, height, ctx } = this;
			ctx.clearRect(0, 0, width, height);
		}

		clearGrid(dir, s = 2, g = s/2) {
			const { width, height, ctx } = this;
			if (dir !== 'h') {
				for (let i = 0; i <= width; i += s) {
					ctx.clearRect(i, 0, g, height);
				}
			}
			if (dir !== 'w') {
				for (let i = 0; i <= height; i += s) {
					ctx.clearRect(0, i, width, g);
				}
			}
		}

		clear() {
			const { width, height, ratio, ctx } = this;
			ctx.clearRect(0, 0, width, height);
		}


		drawText(text, params = {}) {
			const { width, height, ratio, ctx } = this;
			const { position } = params;


			ctx.font = params.font || '20px serif';
	        
	        
	        //const x = textWidth * (0.5 - alignX * 0.5);
	        //const y = 0.5 // * ((lineHeight * options.lineHeight || 1) - lineHeight);
			const textWidth = Math.ceil(ctx.measureText(text).width) * ratio;

			let tx = position.x;
			let ty = position.y;

			if (params.textAlign === 'right') {
				ctx.textAlign = "right";
				tx = width - tx;
				ty = height - ty;
			} else if (params.textAlign === 'left') {
				ctx.textAlign = "left";
			} else {
				ctx.textAlign = "center";
				tx = width / 2;
				ty = height / 2;
			}

			// console.log("textWidth", textWidth, tx, ty );
			
	        ctx.fillStyle = params.color || 'black';
	        ctx.fillText(text, tx, ty);

		}


		plot(data, opts = {}) {
			const { width, height, ctx } = this;
			const { mid } = opts;

			ctx.clearRect(0,0, width, height);

			const l = data.length, bar = width/(l || 1);

			for (let i=0; i<l; i++) {

				const pt = data[i];
				//const peak = peaks[i]

				const bh = pt.value / 100 * height;
				//const ph = peak.value / 100 * height

				const barw = bar-1;
				const m = mid / 100;


				ctx.fillStyle = '#fff';
				ctx.fillRect(i*bar, (height - bh)*m, barw, bh);


				// mid line
				ctx.clearRect(0, height*m, width, 1);

			}

		}

		lines(data, opts = {}) {
			const { width, height, ctx } = this;
			const { mid } = opts;

			const l = data.length, bar = width/(l || 1);
			for (let i=0; i<l; i++) {

				const pt = data[i];
				//const peak = peaks[i]

				const bh = pt.value / 100 * height;
				//const ph = peak.value / 100 * height

				const barw = bar-1;
				const m = mid / 100;

				ctx.fillStyle = '#fff';
				ctx.fillRect(i*bar, (height - bh)*m, barw, 1);

			}

		}



	}

	/*

	*/


	function create(elem, opts) {
		return Canvas.instance(elem, opts)
	}

	exports.create = create;

	return exports;

}({}));

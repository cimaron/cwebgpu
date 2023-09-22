/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUCanvasContext
 */
"use strict";

class GPUCanvasContext {

	/**
	 * @param {HTMLCanvasElement} canvas
	 */
	constructor(canvas) {

		Object.defineProperty(this, 'canvas', {
			enumerable : true,
			value : canvas
		});
	}

	/**
	 * @param {object} configuration
	 */
	configure(configuration) {
		console.warn("GPUCanvasContext.configure() not implemented");
	}

	/**
	 * @param {object} configuration
	 *
	 * @returns {GPUTexture}
	 */
	getCurrentTexture() {
		throw new Error("GPUCanvasContext.getCurrentTexture() not implemented");
	}

	/**
	 * 
	 */
	unconfigure() {
		console.warn("GPUCanvasContext.configure() not implemented");
	}
}

export { GPUCanvasContext };


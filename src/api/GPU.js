/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPU
 */
"use strict";

import { GPUAdapter } from './GPUAdapter.js';


class cGPU {

	constructor() {
	}

	/**
	 * @param {object} [options]
	 *
	 * @returns {Promise<GPUAdapter>}
	 */
	requestAdapter(options) {

		return new Promise((res, rej) => {
			return res(new GPUAdapter(options));
		});
	}

	/**
	 * @returns {string}
	 */
	getPreferredCanvasFormat() {
		return "rgba8unorm";
	}
}


/**
 * Client-side GPU throws error
 */
class GPU extends cGPU {

	/**
	 * @throws {TypeError}
	 */
	constructor() {
		throw new TypeError("Illegal constructor");
	}
}

export { cGPU, GPU };


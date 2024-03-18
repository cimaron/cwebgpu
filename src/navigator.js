/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPU
 */
"use strict";

import { GPU, cGPU } from './api/GPU.js';
import GPUBufferUsage from './api/structures/GPUBufferUsage.js';
import GPUCanvasContext from './api/GPUCanvasContext.js';

//Expose emulated layer by default
if (true) {
	window.cGPU = GPU;
}


if (!navigator.gpu) {
	
	GPU.debug = true;
	window.GPU = GPU;
	navigator.gpu = new cGPU;
	
	window.GPUBufferUsage = GPUBufferUsage;
	
	const getContext = HTMLCanvasElement.prototype.getContext;
	/**
	 * @param {string} contextType
	 * @param {object} [contextAttributes]
	 *
	 * @url https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
	 */
	HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
	
		if (contextType != "webgpu") {
			return getContext.call(this, contextType, contextAttributes);
		}

		return new GPUCanvasContext(this);
	};
}


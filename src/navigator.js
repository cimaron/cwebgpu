/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPU
 */
"use strict";


import { GPU, cGPU } from './api/GPU.js';


//Expose emulated layer by default
if (true) {
	window.cGPU = GPU;
}


if (!navigator.gpu) {
	window.GPU = GPU;
	navigator.gpu = new cGPU;
}


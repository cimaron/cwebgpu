/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer
 */
"use strict";

import { GPUObjectBase } from './GPUObjectBase.js';


class GPUBuffer extends GPUObjectBase {

	/**
	 * @param {object} descriptor
	 */
	constructor(descriptor) {
		super();
	}
}

console.warn("cWebGPU: GPUBuffer.mapState not implemented yet");
console.warn("cWebGPU: GPUBuffer.size not implemented yet");
console.warn("cWebGPU: GPUBuffer.usage not implemented yet");

console.warn("cWebGPU: GPUBuffer.destroy() not implemented yet");
console.warn("cWebGPU: GPUBuffer.getMappedRange() not implemented yet");
console.warn("cWebGPU: GPUBuffer.mapAsync() not implemented yet");
console.warn("cWebGPU: GPUBuffer.unmap() not implemented yet");


export default GPUBuffer;


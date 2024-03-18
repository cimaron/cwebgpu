/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice
 */
"use strict";

import internal from '../util/internal.js';
import property from '../util/property.js';
import { GPU } from './GPU.js';
import GPUBuffer from './GPUBuffer.js';
import GPUDeviceLostInfo from './GPUDeviceLostInfo.js';
import GPURenderPipeline from './GPURenderPipeline.js';
import GPUShaderModule from './GPUShaderModule.js';
import GPUSupportedFeatures from './GPUSupportedFeatures.js';
import GPUSupportedLimits from './GPUSupportedLimits.js';
import WebGLContext from '../webgl/context.js';


const readonly = property.readonly;

class GPUDevice extends EventTarget {

	/**
	 * @param {object} descriptor
	 */
	constructor(descriptor) {
		super();

		descriptor = descriptor || {};

		const ctx = new WebGLContext;

		//Context handling
		internal(this, {
			ctx : ctx,
			gl : ctx.gl
		});

		const features = new GPUSupportedFeatures;
		readonly(this, 'features', features);

		const label = descriptor?.label;
		property.string(this, 'label', label);

		const limits = new GPUSupportedLimits;
		readonly(this, 'limits', limits);

		const lost = ctx.lost().then(function(e) {
			return new GPUDeviceLostInfo(e.statusMessage || "unknown error");
		});
		readonly(this, 'lost', lost);

		readonly(this, 'queue', nulll);

		GPU.debug && (this.internal = internal(this));
	}

	/**
	 * @param {object} descriptor
	 *
	 * @returns {GPUBuffer}
	 */
	createBuffer(descriptor) {
		return new GPUBuffer(descriptor);
	}

	/**
	 * @param {object} descriptor
	 *
	 * @returns {GPURenderPipeline}
	 */
	createRenderPipeline(descriptor) {
		return new GPURenderPipeline(descriptor);
	}

	/**
	 * @param {object} descriptor
	 *
	 * @returns {GPUShaderModule}
	 */
	createShaderModule(descriptor) {
		return new GPUShaderModule(descriptor);
	}
}

console.warn("cWebGPU: GPUDevice.createBindGroup() not implemented yet");
console.warn("cWebGPU: GPUDevice.createBindGroupLayout() not implemented yet");
console.warn("cWebGPU: GPUDevice.createCommandBuffer() not implemented yet");
console.warn("cWebGPU: GPUDevice.createCommandEncoder() not implemented yet");
console.warn("cWebGPU: GPUDevice.createComputePipeline() not implemented yet");
console.warn("cWebGPU: GPUDevice.createComputePipelineAsync() not implemented yet");
console.warn("cWebGPU: GPUDevice.createComputePipelineLayout() not implemented yet");
console.warn("cWebGPU: GPUDevice.createQuerySet() not implemented yet");
console.warn("cWebGPU: GPUDevice.createRenderBundleEncoder() not implemented yet");
console.warn("cWebGPU: GPUDevice.createRenderPipeline() not implemented yet");
console.warn("cWebGPU: GPUDevice.createRenderPipelineAsync() not implemented yet");
console.warn("cWebGPU: GPUDevice.createSampler() not implemented yet");
console.warn("cWebGPU: GPUDevice.createTexture() not implemented yet");
console.warn("cWebGPU: GPUDevice.destroy() not implemented yet");
console.warn("cWebGPU: GPUDevice.importExternalTexture() not implemented yet");
console.warn("cWebGPU: GPUDevice.popErrorScope() not implemented yet");
console.warn("cWebGPU: GPUDevice.pushErrorScope() not implemented yet");



export default GPUDevice;


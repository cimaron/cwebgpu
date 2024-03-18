/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice
 */
"use strict";

import { GPU } from './GPU.js';
import GPUBuffer from './GPUBuffer.js';
import GPUDeviceLostInfo from './GPUDeviceLostInfo.js';
import GPURenderPipeline from './GPURenderPipeline.js';
import GPUShaderModule from './GPUShaderModule.js';
import GPUSupportedFeatures from './GPUSupportedFeatures.js';
import GPUSupportedLimits from './GPUSupportedLimits.js';
import WebGLContext from '../webgl/context.js';



const storage = new WeakMap;


class GPUDevice extends EventTarget {

	/**
	 * @param {object} descriptor
	 */
	constructor(descriptor) {

		descriptor = descriptor || {};
		super(descriptor.label);

		const data = {};
		storage.set(this, data);

		data.features = new GPUSupportedFeatures;
		data.limits   = new GPUSupportedLimits;
		data.queue    = {name : "GPUQueue"};

		//Context handling
		data.ctx = new WebGLContext;
		data.gl = data.ctx.gl;

		data.lost = data.ctx.lost().then(function(e) {
			return new GPUDeviceLostInfo(e.statusMessage || "unknown error");
		});

		//Debug-only
		if (GPU.debug) {
			this._data = data;
		}
	}

	/**
	 * @returns {GPUSupportedFeatures}
	 */
	get features() {
		return storage.get(this).features;
	}

	/**
	 * @returns {GPUSupportedLimits}
	 */
	get limits() {
		return storage.get(this).limits;
	}

	/**
	 * @returns {Promise<GPUDeviceLostInfo>}
	 */
	get lost() {
		return storage.get(this).lost;
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

export default GPUDevice;


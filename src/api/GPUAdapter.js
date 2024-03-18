/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter
 */
"use strict";

import property from '../util/property.js';
import GPUAdapterInfo from './GPUAdapterInfo.js';
import GPUSupportedFeatures from './GPUSupportedFeatures.js';
import GPUSupportedLimits from './GPUSupportedLimits.js';
import GPUDevice from './GPUDevice.js';


class GPUAdapter {

	/**
	 * @param {object} [options]
	 */
	constructor(options) {

		// options only contains a single preference: powerPreference 
		// which is useless for our fallback adapter

		property.readonly(this, 'features', new GPUSupportedFeatures);
		property.readonly(this, 'isFallbackAdapter', true);
		property.readonly(this, 'limits', new GPUSupportedLimits);
	}

	/**
	 * @returns {Promise<GPUAdapterInfo>}
	 */
	requestAdapterInfo() {

		return new Promise((res, rej) => {
			res(new GPUAdapterInfo);
		});
	}

	/**
	 * @param {object} [descriptor]
	 *
	 * @returns {Promise<GPUDevice>}
	 */
	requestDevice(descriptor) {

		return new Promise((res, rej) => {
			res(new GPUDevice(descriptor));
		});
	}
}

console.warn("cWebGPU: GPUBuffer.mapState not implemented yet");


export default GPUAdapter;

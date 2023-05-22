/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter
 */
"use strict";

import { GPUAdapterInfo } from './GPUAdapterInfo.js';
import { GPUSupportedFeatures } from './GPUSupportedFeatures.js';
import { GPUSupportedLimits } from './GPUSupportedLimits.js';


class GPUAdapter {

	/**
	 * @param {object} [options]
	 */
	constructor(options) {

		this.features = new GPUSupportedFeatures;
		this.isFallbackAdapter = true;
		this.limits = new GPUSupportedLimits;
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
	 * @returns {Promise<GPUDevice>}
	 */
	requestDevice() {

		return new Promise((res, rej) => {
			res(new GPUDevice(this.options));
		});
	}
}

export { GPUAdapter };


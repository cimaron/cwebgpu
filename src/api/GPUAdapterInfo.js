/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo
 */
"use strict";


class GPUAdapterInfo {

	/**
	 * @returns {string}
	 */
	get architecture() {
		return "webgl";
	}

	/**
	 * @returns {string}
	 */
	get description() {
		return "";
	}

	/**
	 * @returns {string}
	 */
	get device() {
		return "";
	}

	/**
	 * @returns {string}
	 */
	get vendor() {
		return "cWebGPU";
	}
}

export { GPUAdapterInfo };


/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter
 */
"use strict";

import property from '../util/property.js';


const GPUDeviceLostReason = [
	"unknown",
	"destroyed"
];


class GPUDeviceLostInfo {

	/**
	 * @param {string} [message]
	 * @param {string} [reason]	 
	 */
	constructor(message, reason) {

		/*
		if (!GPUDeviceLostReason.includes(reason)) {
			throw new Error(`Invalid enum '${reason}' in GPUDeviceLostReason`);
		}
		*/

		property.readonly(this, 'message', String(message));
		property.readonly(this, 'reason', String(reason));
	}
}


export default GPUDeviceLostInfo;

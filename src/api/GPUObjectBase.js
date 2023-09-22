/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter
 */
"use strict";

import { property } from '../util/property.js';


class GPUObjectBase {

	/**
	 * @param {string} [label]
	 */
	constructor() {
		property.string(this, 'label');
	}
};


export { GPUObjectBase };

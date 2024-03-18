/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPURenderPipeline
 */
"use strict";


const data = new WeakMap;

function internal(obj, def) {

	if (def) {
		data.set(obj, def);
	}

	return data.get(obj);
}


export default internal;

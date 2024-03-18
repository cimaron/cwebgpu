/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter
 */
"use strict";


const property = {

	/**
	 * @param {object} object
	 * @param {string|object} name
	 * @param {*} value
	 */
	readonly : function(object, name, value) {

		if (typeof name == "object") {

			for (let i in name) {
				this.readonly(object, i, name[i]);	
			}

		} else {

			Object.defineProperty(object, name, {
				enumerable : true,
				value : value
			});
		}
	},

	/**
	 * Initialize object property as a string
	 *
	 * @param {object} object
	 * @param {string} name
	 */
	string : function(object, name) {

		Object.defineProperty(object, name, {
			enumerable : true,
			set : function(value) {
				return String(value);
			}
		});
	}
};


export default property;


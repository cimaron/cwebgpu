/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer
 */
"use strict";


class DOMException extends window.DOMException {

	/**
	 * @param {string} message
	 */
	constructor(message, name) {
		super(getMessage(message, TypeError.className), name);
	}
}

class RangeError extends window.RangeError {
}

class TypeError extends window.TypeError {

	/**
	 * @param {string} message
	 */
	constructor(message) {
		super(getMessage(message, TypeError.className));
		this.stack = popStack(this.stack, 2);
	}
}

class ErrorString {

	text = "";

	constructor(text) {
		this.text = text;
	}

	toString() {
		return this.text;
	}
	
	format(...args) {
		let text = this.text;

		for (let [i, arg] of args.entries()) {
			text = text.replace(new RegExp("%" + (i + 1), "g"), arg);
		}

		return text;
	}
}

/**
 * @param {Error} obj
 */
function getMessage(message, className) {

	let stack = (new Error()).stack.split("\n");
	stack.shift(); //pop updateError()
	stack.shift(); //pop constructor()
	let caller = stack.shift(); //pop caller

	message = message.replace(/\$\{fn\}/g, caller.split("@")[0]);
	message = message.replace(/\$\{className\}/g, className);
	
	return message;
}

/**
 * @param {string} stack
 *
 * @return {string}
 */
function popStack(stack, n) {

	stack = stack.split("\n");

	for (let i = 0; i < n; i++) {
		stack.shift();
	}

	return stack.join("\n");
}



const fte = "Failed to execute '${fn}' on '${className}': ";

const error = {
	ARGUMENT_MISSING : fte + "1 argument required, but only 0 present.",
	INVALID_BUFFER   : "Buffer is invalid",
	INVALID_RANGE_UL : fte + "Value is outside the 'unsigned long' value range.",
	INVALID_TYPE_ULL : fte + "Value is not of type 'unsigned long long'.",
	INVALID_TYPE_UL  : fte + "Value is not of type 'unsigned long'.",
	GETMAPPEDRANGE_FAILED : fte + "getMappedRange failed",
	GETMAPPEDRANGE_OVERLAP : new ErrorString(fte + "getMappedRange [%1, %2) overlaps with previously returned range [%3, %4)."),
	OUT_OF_BOUNDS : "offset is out of bounds"
};


export { error, DOMException, RangeError, TypeError };


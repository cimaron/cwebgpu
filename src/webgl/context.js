/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 */

class WebGLContext {

	#lastError;

	constructor() {

		this.canvas = document.createElement('canvas');
		this.gl2 = this.canvas.getContext('webgl2');
		this.gl = this.gl2;

		if (!this.gl) {
			this.gl = this.canvas.getContext('webgl');
		}

		console.log(this.gl);
	}

	/**
	 * @returns {Promise}
	 */
	lost() {

		let self = this;

		return new Promise((res, rej) => {

			self.canvas.addEventListener('webglcontextlost', res, false);

			if (self.gl.isContextLost()) {
				res();
			}
		});
	}

	/**
	 * Force context lost
	 */
	lose() {
		this.gl.getExtension("WEBGL_lose_context").loseContext('x');
	}

	/**
	 * @return WebGLBuffer
	 */
	createBuffer(size) {

		let buffer = this.gl.createBuffer();
		let usage = this.gl.DYNAMIC_DRAW;

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, size, usage);

		return buffer;
	}
console.warn("cWebGPU: GPUBuffer.getMappedRange() partially implemented");+}

export default WebGLContext;


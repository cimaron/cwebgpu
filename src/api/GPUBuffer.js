/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer
 */
"use strict";

import { GPU } from './GPU.js';
import GPUObjectBase from './GPUObjectBase.js';
import GPUMapMode from './structures/GPUMapMode.js';

import { error, DOMException, TypeError, RangeError } from './errors.js';
import property from '../util/property.js';
import internal from '../util/internal.js';

const readonly = property.readonly;
const alias    = property.alias;

TypeError.className = "GPUBuffer";


class GPUBuffer extends GPUObjectBase {

	/**
	 * @param {WebGLContext} source
	 * @param {object} descriptor
	 */
	constructor(ctx, descriptor) {
		super(descriptor);

		const data = internal(this, {
			ctx : ctx,
			buffer : new ArrayBuffer(descriptor.size),
			promise : null,
			mapping : null,
			buffer_sync : false,

			mapState : "unmapped",
			size     : descriptor.size,
			usage    : descriptor.usage
		});

		alias(this, 'mapState', () => data.mapState);
		alias(this, 'size',     () => data.size);
		alias(this, 'usage',    () => data.usage);

		if (descriptor.mappedAtCreation) {
			this.#map(GPUMapMode.WRITE, 0, data.size);
		}

		GPU.debug && (this.internal = internal(this));
	}

	/**
	 * @param {int} offset
	 * @param {int} size
	 *
	 * returns {ArrayBuffer}
	 */
	getMappedRange(offset, size) {
		const data = internal(this);
		const mapping = data.mapping;

		if (mapping === null) {
			throw new DOMException(error.GETMAPPED_RANGE_FAILED);
		}

		if (offset === undefined) {
			offset = 0;
		}

		if (size === undefined) {
			size = data.size - offset;
		}

		//Offset must be multiple of 8
		offset = offset|0;

		//Size must be multiple of 4
		size = size|0;

		if (offset % 8 != 0 || size % 4 != 0) {
			throw new DOMException(error.GETMAPPEDRANGE_FAILED);
		}

		if (offset < 0) {
			throw new DOMException(error.INVALID_RANGE_UL);
		}

		//Check for out of map range
		let end = offset + size - 1;
		if (offset < mapping.range[0] || offset >= mapping.range[1] || end < mapping.range[0] || end >= mapping.range[1]) {
			throw new RangeError(error.OUT_OF_BOUNDS);
		}

		//Check view ranges
		for (let i = 0; i < mapping.views.length; i++) {
			let view = mapping.views[i];

			if ((offset >= view.range[0] && offset < view.range[1]) ||
			    (end >= view.range[0] && end < view.range[1])
				) {
				throw new DOMException(error.GETMAPPEDRANGE_OVERLAP.format(offset, end, view.range[0], view.range[1]));
			}
		}

		let buffer = new ArrayBuffer(size);

		if (data.buffer_sync) {
			console.warn("GPUBuffer: copy mapped data from GPU not implemented yet");
		}

		mapping.views.push({
			buffer : buffer,
			range : [offset, offset + size]
		});

		return buffer;
	}

	/**
	 * Create mapping
	 */
	#map(mode, offset, size) {
		const data = internal(this);

		let end = offset + size - 1;
		if (offset < 0 || offset >= data.size || end < 0 || end >= data.size) {
			throw new RangeError(error.OUT_OF_BOUNDS);
		}

		let gBuffer = data.ctx.createBuffer(data.size);
		if (!gBuffer) {
			throw new Error("GPUBuffer: Could not allocate buffer on GPU");
		}

		data.mapping = {
			gbuffer : gBuffer,
			//data  : new ArrayBuffer(size),
			data  : null,
			mode  : mode,
			range : [offset, offset + size],
			views : [],
		};

		data.mapState = "mapped";
	}
}





console.warn("cWebGPU: GPUBuffer.destroy() not implemented yet");
console.warn("cWebGPU: GPUBuffer.getMappedRange() partially implemented");
console.warn("cWebGPU: GPUBuffer.mapAsync() not implemented yet");
console.warn("cWebGPU: GPUBuffer.unmap() not implemented yet");


export default GPUBuffer;


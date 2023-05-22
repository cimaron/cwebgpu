/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUSupportedLimits
 */
"use strict";


class GPUSupportedLimits {

	#features;

	/**
	 * Constructor
	 */
	constructor() {

		this.#features = {
			maxBindGroups: 4,
			maxBindingsPerBindGroup: 640,
			maxBufferSize: 2147483648,
			maxColorAttachmentBytesPerSample: 32,
			maxColorAttachments: 8,
			maxComputeInvocationsPerWorkgroup: 1024,
			maxComputeWorkgroupSizeX: 1024,
			maxComputeWorkgroupSizeY: 1024,
			maxComputeWorkgroupSizeZ: 64,
			maxComputeWorkgroupStorageSize: 32768,
			maxComputeWorkgroupsPerDimension: 65535,
			maxDynamicStorageBuffersPerPipelineLayout: 8,
			maxDynamicUniformBuffersPerPipelineLayout: 10,
			maxInterStageShaderComponents: 60,
			maxInterStageShaderVariables: 16,
			maxSampledTexturesPerShaderStage: 16,
			maxSamplersPerShaderStage: 16,
			maxStorageBufferBindingSize: 2147483647,
			maxStorageBuffersPerShaderStage: 8,
			maxStorageTexturesPerShaderStage: 8,
			maxTextureArrayLayers: 256,
			maxTextureDimension1D: 8192,
			maxTextureDimension2D: 8192,
			maxTextureDimension3D: 2048,
			maxUniformBufferBindingSize: 65536,
			maxUniformBuffersPerShaderStage: 12,
			maxVertexAttributes: 16,
			maxVertexBufferArrayStride: 2048,
			maxVertexBuffers: 8,
			minStorageBufferOffsetAlignment: 256,
			minUniformBufferOffsetAlignment: 256
		};
	}

	/**
	 * @returns {number}
	 */
	get maxBindGroups() {
		return this.#features.maxBindGroups;
	}

	/**
	 * @returns {number}
	 */
	get maxBindingsPerBindGroup() {
		return this.#features.maxBindingsPerBindGroup;
	}

	/**
	 * @returns() {number}
	 */
	get maxBufferSize() {
		return this.#features.maxBufferSize;
	}

	/**
	 * @returns() {number}
	 */
	get maxColorAttachmentBytesPerSample() {
		return this.#features.maxColorAttachmentBytesPerSample;
	}

	/**
	 * @returns() {number}
	 */
	get maxColorAttachments() {
		return this.#features.maxColorAttachments;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeInvocationsPerWorkgroup() {
		return this.#features.maxComputeInvocationsPerWorkgroup;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeWorkgroupSizeX() {
		return this.#features.maxComputeWorkgroupSizeX;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeWorkgroupSizeY() {
		return this.#features.maxComputeWorkgroupSizeY;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeWorkgroupSizeZ() {
		return this.#features.maxComputeWorkgroupSizeZ;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeWorkgroupStorageSize() {
		return this.#features.maxComputeWorkgroupStorageSize;
	}

	/**
	 * @returns() {number}
	 */
	get maxComputeWorkgroupsPerDimension() {
		return this.#features.maxComputeWorkgroupsPerDimension;
	}

	/**
	 * @returns() {number}
	 */
	get maxDynamicStorageBuffersPerPipelineLayout() {
		return this.#features.maxDynamicStorageBuffersPerPipelineLayout;
	}

	/**
	 * @returns() {number}
	 */
	get maxDynamicUniformBuffersPerPipelineLayout() {
		return this.#features.maxDynamicUniformBuffersPerPipelineLayout;
	}

	/**
	 * @returns() {number}
	 */
	get maxInterStageShaderComponents() {
		return this.#features.maxInterStageShaderComponents;
	}

	/**
	 * @returns() {number}
	 */
	get maxInterStageShaderVariables() {
		return this.#features.maxInterStageShaderVariables;
	}

	/**
	 * @returns() {number}
	 */
	get maxSampledTexturesPerShaderStage() {
		return this.#features.maxSampledTexturesPerShaderStage;
	}

	/**
	 * @returns() {number}
	 */
	get maxSamplersPerShaderStage() {
		return this.#features.maxSamplersPerShaderStage;
	}

	/**
	 * @returns() {number}
	 */
	get maxStorageBufferBindingSize() {
		return this.#features.maxStorageBufferBindingSize;
	}

	/**
	 * @returns() {number}
	 */
	get maxStorageBuffersPerShaderStage() {
		return this.#features.maxStorageBuffersPerShaderStage;
	}

	/**
	 * @returns() {number}
	 */
	get maxStorageTexturesPerShaderStage() {
		return this.#features.maxStorageTexturesPerShaderStage;
	}

	/**
	 * @returns() {number}
	 */
	get maxTextureArrayLayers() {
		return this.#features.maxTextureArrayLayers;
	}

	/**
	 * @returns() {number}
	 */
	get maxTextureDimension1D() {
		return this.#features.maxTextureDimension1D;
	}

	/**
	 * @returns() {number}
	 */
	get maxTextureDimension2D() {
		return this.#features.maxTextureDimension2D;
	}

	/**
	 * @returns() {number}
	 */
	get maxTextureDimension3D() {
		return this.#features.maxTextureDimension3D;
	}

	/**
	 * @returns() {number}
	 */
	get maxUniformBufferBindingSize() {
		return this.#features.maxUniformBufferBindingSize;
	}

	/**
	 * @returns() {number}
	 */
	get maxUniformBuffersPerShaderStage() {
		return this.#features.maxUniformBuffersPerShaderStage;
	}

	/**
	 * @returns() {number}
	 */
	get maxVertexAttributes() {
		return this.#features.maxVertexAttributes;
	}

	/**
	 * @returns() {number}
	 */
	get maxVertexBufferArrayStride() {
		return this.#features.maxVertexBufferArrayStride;
	}

	/**
	 * @returns() {number}
	 */
	get maxVertexBuffers() {
		return this.#features.maxVertexBuffers;
	}

	/**
	 * @returns() {number}
	 */
	get minStorageBufferOffsetAlignment() {
		return this.#features.minStorageBufferOffsetAlignment;
	}

	/**
	 * @returns() {number}
	 */
	get minUniformBufferOffsetAlignment() {
		return this.#features.minUniformBufferOffsetAlignment;
	}
}

export { GPUSupportedLimits };


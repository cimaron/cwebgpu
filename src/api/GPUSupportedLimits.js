/**
 * cWebGPU
 *
 * @author  Cimaron Shanahan
 * @license MIT
 * @url https://developer.mozilla.org/en-US/docs/Web/API/GPUSupportedLimits
 */
"use strict";

import property from '../util/property.js';


class GPUSupportedLimits {

	/**
	 * Constructor
	 */
	constructor() {

		property.readonly(this, {
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
		});
	}
}


export default GPUSupportedLimits;

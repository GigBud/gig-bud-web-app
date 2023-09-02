/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { appDir: true },
	/**
	 * Updates the webpack configuration by enabling top level await.
	 *
	 * @param {object} config - The webpack configuration object.
	 * @return {object} The updated webpack configuration object.
	 */
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		}
		return config
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// Your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	// DistDir: 'build', // Create the dist directory for the build
	// Output: 'standalone', // Can be deployed on its own without installing node_modules.
}

module.exports = nextConfig

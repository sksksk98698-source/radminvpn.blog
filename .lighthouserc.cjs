module.exports = {
	ci: {
		collect: {
			numberOfRuns: 1,
			startServerCommand: "astro preview",
			url: [
				"http://localhost:4321/en/",
				"http://localhost:4321/en/post",
				"http://localhost:4321/en/shortpost",
			],
		},
		assert: {
			preset: "lighthouse:no-pwa",
			assertions: {
				"csp-xss": "warn",
				"total-byte-weight": "off",
				"identical-links-same-purpose": "off",
				"landmark-one-main": "off",
				"color-contrast": "warn",
				"image-size-responsive": "warn",
				"non-composited-animations": "warn",
				"offscreen-images": "warn",
				"bf-cache": "warn",
				"uses-rel-preconnect": "warn",
				"unused-css-rules": "warn",
				"uses-optimized-images": "warn",
				"link-text": "warn",
				deprecations: "warn",
			},
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};

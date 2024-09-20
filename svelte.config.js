// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import adapter from 'amplify-adapter';
import { prePreprocess } from '@sveltejs/vite-plugin-svelte';

export default config;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    postcss: true
	}),
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		inspector: false
	},
	onwarn: (warning, handler) => {
		if(warning.filename.includes('svelte-json-tree')) {return}
		handler(warning);
	}
};

export default config;

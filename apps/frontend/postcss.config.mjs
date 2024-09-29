/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    '@csstools/postcss-oklab-function': { preserve: true },
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    }
  }
}

export default config

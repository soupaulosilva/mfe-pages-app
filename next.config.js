/** @type {import('next').NextConfig} */
const NextModuleFederation = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(new NextModuleFederation({
      name: 'app-pages',
      filename:'static/chunks/remoteEntry.js',
      exposes: {
        // './help': './pages/help/index',
        // './pages-map': './pages-map.js'
        // './App': './src/App.js',
        './layout': './src/components/layout',
        './context/action': './src/context/action'
      },
      extraOptions: {
        exposePages: true
      }
    }))

    return config
  },
  reactStrictMode: true,
}
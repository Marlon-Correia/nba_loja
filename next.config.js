/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {key: 'Acess-Control-Allow-Origin', value: 'http://ws.correios.com.br'},
          {key: 'Acess-Control-Allow-Headers', value: 'Content-Type'},
          {key: 'Acess-Control-Allow-Method', value: '*'},
        ]
      }
    ]
  }
}

module.exports = nextConfig

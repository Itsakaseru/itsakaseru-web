module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/saweria',
        destination: 'https://saweria.co/itsakaseru',
        permanent: false,
      },
    ]
  },
}

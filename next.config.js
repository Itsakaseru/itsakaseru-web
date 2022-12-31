/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/saweria',
        destination: 'https://saweria.co/itsakaseru',
        permanent: false,
      },
      {
        source: '/onKeys/survey',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScMtN3W2ZULGf_PeBo1hjO9eWxONn21TEyEMpK_0EPSxqp-5Q/viewform?usp=sf_link',
        permanent: false,
      }
    ]
  },
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' www.googletagmanager.com https://www.google-analytics.com;
      connect-src 'self' https://www.google-analytics.com;
      font-src 'self';
    `
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ]
      }
    ]
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

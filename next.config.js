/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://static.cloudflareinsights.com/;
      style-src 'self' 'unsafe-inline';
      img-src 'self';
      connect-src 'self';
      font-src 'self';
      frame-src 'self' https://www.youtube-nocookie.com;
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
            key: 'X-Content-Type-Options',
            value: 'nosniff'
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
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScL3XC3n4hFTauEhqttnezF3PiDItHudcvLD_phBi44GcNuxQ/viewform?usp=sf_link',
        permanent: false,
      }
    ]
  },
}

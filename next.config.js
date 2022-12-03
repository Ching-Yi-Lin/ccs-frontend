// If nothing in environment variables, will default back to local settings
const DEFAULT_BACKEND_DOMAIN = '127.0.0.1';
const DEFAULT_BACKEND_URL = `http://${DEFAULT_BACKEND_DOMAIN}:1337`;
const DEFAULT_API_URL = `${DEFAULT_BACKEND_URL}/api`;
const USE_IMAGE_PROVIDER = true;

module.exports = {
  images: {
    domains: [
      process.env.BACKEND_DOMAIN || DEFAULT_BACKEND_DOMAIN,
      'res.cloudinary.com',
      'herokuapp.com',
      '127.0.0.1'
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || DEFAULT_API_URL,
    BACKEND_URL: process.env.NODE_ENV === 'production' || USE_IMAGE_PROVIDER ? '' : DEFAULT_BACKEND_URL,
  }
};


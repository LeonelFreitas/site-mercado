/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ignora erros de lint durante o build (útil para deploy rápido)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "static.coingecko.com"
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.coingecko.com",
            }
        ]
    }
}

module.exports = nextConfig

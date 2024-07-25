/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // (https://res.cloudinary.com/dvgmlukct/image/upload/v1721657548/tzwgv5drkjcvvh1cxhor.jpg)
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;

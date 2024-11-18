/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/cv",
                destination: "https://dl.itsakaseru.me/cv-2024-11-18-14-15.pdf",
                permanent: false,
            },
        ]
    },
};

export default nextConfig;

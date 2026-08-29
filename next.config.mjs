const isDevelop = process.env.ISDEVELOP === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  ...(isDevelop
    ? {}
    : {
        output: "export",
        basePath: "/",
        assetPrefix: "/",
        images: {
          unoptimized: true,
        },
      }),
};

export default nextConfig;

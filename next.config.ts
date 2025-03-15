import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    unoptimized: true,
    domains: [
      "avatars.githubusercontent.com",
      "via.placeholder.com",
      "picsum.photos",
      "media.licdn.com",
      "cdn.dribbble.com",
      "www.soracert.org",
      "www.unilu.ac.cd",
      "i0.wp.com",
      "udbl.ac.cd",
      "i.pinimg.com",
    ],
  },
};

export default nextConfig;

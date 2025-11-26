/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    // Fix pdf-parse attempting to load test file on import
    // The package's index.js checks `!module.parent` which is unreliable in bundled environments
    // This alias forces webpack to use the lib file directly, bypassing the problematic index.js
    if (isServer) {
      config.resolve.alias["pdf-parse"] = "pdf-parse/lib/pdf-parse.js";
    }
    return config;
  },
};

export default config;

const { spawnSync } = require("child_process");

const nextMajor = Number(process.versions.node.split(".")[0]);
const env = { ...process.env };

// Node 17+ switched to OpenSSL 3, which breaks webpack's legacy md4 hashing
// used internally by Next.js 11. Node 16 (Netlify's build image) doesn't
// support this flag at all, so only apply it when it's needed.
if (nextMajor >= 17) {
  env.NODE_OPTIONS = [env.NODE_OPTIONS, "--openssl-legacy-provider"]
    .filter(Boolean)
    .join(" ");
}

const args = process.argv.slice(2);
const result = spawnSync("next", args, { stdio: "inherit", env });
process.exit(result.status ?? 1);

import fs from "node:fs";
import path from "node:path";

async function prerender() {
  const { default: server } = await import("./dist/server/server.js");

  // Fake a request to /
  const req = new Request("http://localhost/");
  const res = await server.fetch(req);

  if (res.ok) {
    const html = await res.text();
    fs.writeFileSync(path.join(process.cwd(), "dist/client/index.html"), html);
    console.log("Successfully generated dist/client/index.html!");

    // Move dist/client contents to dist to work smoothly with Vercel's default Vite output dir
    const clientDir = path.join(process.cwd(), "dist/client");
    const distDir = path.join(process.cwd(), "dist");
    const files = fs.readdirSync(clientDir);
    for (const file of files) {
      if (file !== "server") {
        const dest = path.join(distDir, file);
        if (fs.existsSync(dest)) {
          fs.rmSync(dest, { recursive: true, force: true });
        }
        fs.renameSync(path.join(clientDir, file), dest);
      }
    }
    // Clean up
    fs.rmSync(clientDir, { recursive: true, force: true });
    const serverDir = path.join(process.cwd(), "dist/server");
    fs.rmSync(serverDir, { recursive: true, force: true });

    console.log("Copied client assets to /dist for Vercel deployment.");
  } else {
    console.error("Failed to prerender index.html", res.status, await res.text());
    process.exit(1);
  }
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});

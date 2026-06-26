import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const markSvg = fs.readFileSync(
  path.join(root, "public/images/phorian-symbol-mark.svg"),
);

async function writePng(outputPath, width, height = width) {
  await sharp(markSvg).resize(width, height, { fit: "contain" }).png().toFile(outputPath);
}

async function writeOgImage(outputPath) {
  const symbol = await sharp(markSvg).resize(420, 420, { fit: "contain" }).png().toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: "#000000",
    },
  })
    .composite([{ input: symbol, gravity: "center" }])
    .png()
    .toFile(outputPath);
}

await fs.promises.mkdir(path.join(root, "app"), { recursive: true });
await fs.promises.mkdir(path.join(root, "public"), { recursive: true });

await writePng(path.join(root, "app/icon.png"), 512);
await writePng(path.join(root, "app/apple-icon.png"), 180);
await writePng(path.join(root, "public/apple-icon.png"), 180);
await writePng(path.join(root, "public/favicon-32x32.png"), 32);
await writePng(path.join(root, "public/favicon-16x16.png"), 16);
await writeOgImage(path.join(root, "public/og-image.png"));
await writeOgImage(path.join(root, "app/opengraph-image.png"));

console.log("Brand assets generated.");

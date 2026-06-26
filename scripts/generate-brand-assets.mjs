import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const faviconSvgPath = path.join(root, "app/icon.svg");
const ogSymbolSvgPath = path.join(root, "public/images/phorian-symbol.svg");

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const faviconSvg = fs.readFileSync(faviconSvgPath);
const ogSymbolSvg = fs.readFileSync(ogSymbolSvgPath);

async function writePng(outputPath, size) {
  const density = Math.min(144, Math.max(72, size * 2));

  await sharp(faviconSvg, { density, limitInputPixels: false })
    .resize(size, size, {
      fit: "contain",
      background: transparent,
    })
    .png()
    .toFile(outputPath);
}

async function writeOgImage(outputPath) {
  const symbol = await sharp(ogSymbolSvg, { density: 300 })
    .resize(420, 420, { fit: "contain", background: transparent })
    .png()
    .toBuffer();

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

const pngSizes = [
  { file: "public/favicon-16x16.png", size: 16 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/favicon-48x48.png", size: 48 },
  { file: "public/apple-icon.png", size: 180 },
  { file: "app/apple-icon.png", size: 180 },
  { file: "public/icon-192x192.png", size: 192 },
  { file: "public/icon-512x512.png", size: 512 },
];

await fs.promises.mkdir(path.join(root, "app"), { recursive: true });
await fs.promises.mkdir(path.join(root, "public"), { recursive: true });

for (const { file, size } of pngSizes) {
  await writePng(path.join(root, file), size);
}

await writeOgImage(path.join(root, "public/og-image.png"));
await writeOgImage(path.join(root, "app/opengraph-image.png"));

console.log("Favicon assets generated from public/images/phorian-symbol.svg");

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = process.cwd();
const faviconSvgPath = path.join(root, "app/icon.svg");
const ogSymbolSvgPath = path.join(root, "public/images/phorian-symbol.svg");
const iconVersion = 5;

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const faviconSvg = fs.readFileSync(faviconSvgPath);
const ogSymbolSvg = fs.readFileSync(ogSymbolSvgPath);

await fs.promises.mkdir(path.join(root, "app"), { recursive: true });
await fs.promises.mkdir(path.join(root, "public"), { recursive: true });

await fs.promises.copyFile(faviconSvgPath, path.join(root, "public/icon.svg"));

async function renderFaviconPng(size) {
  const density = Math.min(384, Math.max(144, size * 8));

  return sharp(faviconSvg, { density, limitInputPixels: false })
    .resize(size, size, {
      fit: "contain",
      background: transparent,
    })
    .png()
    .toBuffer();
}

async function writePng(outputPath, size) {
  const png = await renderFaviconPng(size);
  await fs.promises.writeFile(outputPath, png);
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

for (const { file, size } of pngSizes) {
  await writePng(path.join(root, file), size);
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(icoSizes.map(renderFaviconPng));
const ico = await toIco(icoBuffers);

for (const file of ["app/favicon.ico", "public/favicon.ico"]) {
  await fs.promises.writeFile(path.join(root, file), ico);
}

await writeOgImage(path.join(root, "public/og-image.png"));
await writeOgImage(path.join(root, "app/opengraph-image.png"));

console.log(`Favicon assets generated (v${iconVersion}) from app/icon.svg`);

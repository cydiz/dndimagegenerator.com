const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://hotpot.ai/images/logos/brandmark.svg', path: 'public/images/logos/brandmark.svg' },
  { url: 'https://hotpot.ai/images/logos/wordmark.svg', path: 'public/images/logos/wordmark.svg' },
  { url: 'https://hotpot.ai/images/site/ai/image_generator/art_maker/teaser_400.jpg', path: 'public/images/site/ai/image_generator/art_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/image_generator/logo_maker/teaser_400.jpg', path: 'public/images/site/ai/image_generator/logo_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/image_generator/photo_maker/teaser_400.jpg', path: 'public/images/site/ai/image_generator/photo_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/image_generator/anime_maker/teaser_400.jpg', path: 'public/images/site/ai/image_generator/anime_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg', path: 'public/images/site/ai/image_generator/background_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/photoshoot/corporate_headshot/teaser_400.jpg', path: 'public/images/site/ai/photoshoot/corporate_headshot/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/photoshoot/avatar/teaser_400.jpg', path: 'public/images/site/ai/photoshoot/avatar/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/profile_picture_maker/teaser_400.jpg', path: 'public/images/site/ai/profile_picture_maker/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/photoshoot/real_estate_headshot/teaser_400.jpg', path: 'public/images/site/ai/photoshoot/real_estate_headshot/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/photoshoot/medical_headshot/teaser_400.jpg', path: 'public/images/site/ai/photoshoot/medical_headshot/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/supersizer/teaser_400.jpg', path: 'public/images/site/ai/supersizer/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/object_remover/teaser_400.jpg', path: 'public/images/site/ai/object_remover/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/background_remover/teaser_400.jpg', path: 'public/images/site/ai/background_remover/teaser_400.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/colorizer/teaser.jpg', path: 'public/images/site/ai/colorizer/teaser.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/art_remixer/teaser.jpg', path: 'public/images/site/ai/art_remixer/teaser.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/restorer/teaser.jpg', path: 'public/images/site/ai/restorer/teaser.jpg' },
  { url: 'https://hotpot.ai/images/site/ai/face_fixer/teaser_400.jpg', path: 'public/images/site/ai/face_fixer/teaser_400.jpg' },
];

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filePath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...');
  for (const image of images) {
    try {
      await downloadFile(image.url, image.path);
    } catch (error) {
      console.error(`Failed to download ${image.url}:`, error.message);
    }
  }
  console.log('Download complete!');
}

downloadAll();


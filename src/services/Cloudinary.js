import cloudinary from 'cloudinary';
import streamifier from 'streamifier';
import { getEnv } from '../config/index.js';

class Cloudinary {
  constructor() {
    this._cloudinary = cloudinary.v2;
    this._cloudinary.config({
      cloud_name: getEnv('CLOUDINARY_CLOUD_NAME'),
      api_key: getEnv('CLOUDINARY_API_KEY'),
      api_secret: getEnv('CLOUDINARY_API_SECRET'),
      secure: true,
    });
  }

  async upload(file) {
    return new Promise((resolve, reject) => {
      const uploadStream = this._cloudinary.uploader.upload_stream(
        { folder: 'pictures' },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}

export { Cloudinary };

import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  console.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  console.debug(
    'Using .env.example file to supply config environment variables'
  );
  dotenv.config({ path: '.env.example' }); // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env['SESSION_SECRET'];
export const DATABASE_URL = process.env['DATABASE_URL'];

if (!SESSION_SECRET) {
  console.error('No client secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}

if (!DATABASE_URL) {
  console.error(
    'No database connection string. Set DATABASE_URL environment variable.'
  );
  process.exit(1);
}

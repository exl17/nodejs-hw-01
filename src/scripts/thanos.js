import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  const toDeleteCount = Math.ceil(contacts.length / 2);
  for (let i = 0; i < toDeleteCount; i += 1) {
    const indexRandomCalc = Math.floor(Math.random() * contacts.length);
    contacts.splice(indexRandomCalc, 1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Half of contacts have been removed');
  }
};

await thanos();
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log('There are no contacts');
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('The last contact has been removed');
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

await removeLastContact();

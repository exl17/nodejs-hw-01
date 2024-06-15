import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  fs.readFile(PATH_DB, 'utf-8')
    .then((data) => {
      const contacts = JSON.parse(data);
      for (let i = 0; i < number; i += 1) {
        const newContact = createFakeContact();
        contacts.push(newContact);
      }
      fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    })
    .catch((err) => {
      console.log(err);
    });
};
await generateContacts(6);
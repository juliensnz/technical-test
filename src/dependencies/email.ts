import {promises as fs} from 'fs';

type EmailClient = {
  sendEmail: (email: string, message: string) => Promise<void>;
};

const createEmailClient = () => ({
  sendEmail: (email: string, message: string): Promise<void> =>
    new Promise(resolve =>
      setTimeout(async () => {
        await fs.writeFile(`./artifacts/mail/${email}`, message);

        resolve();
      }, Math.random() * 150)
    ),
});

export {createEmailClient};
export type {EmailClient};

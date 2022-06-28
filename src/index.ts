import {Database, initDatabaseClient, EmailClient, createEmailClient, log} from './dependencies';

const db: Database = initDatabaseClient();
const emailClient: EmailClient = createEmailClient();

const sendNewsletter = async (username: string, newsletterId: string) => {
  const user = await db.user.findOneByUsername(username);
  if (undefined === user) {
    log('error', `User with username ${username} not found`);
    return;
  }

  const newsletter = await db.newsletter.findOneById(newsletterId);
  if (undefined === newsletter) {
    log('error', `Newsletter with id ${newsletterId} not found`);
    return;
  }

  const messageBody = newsletter.parameters.reduce<string>(
    (body: string, parameter: string) => body.replaceAll(`{{${parameter}}}`, user[parameter]),
    newsletter.template
  );

  await emailClient.sendEmail(user.email, messageBody);
};

if (process.argv[2] === 'sendNewsletter') {
  (async () => await sendNewsletter('michel', 'recipe'))();
}

export {sendNewsletter};

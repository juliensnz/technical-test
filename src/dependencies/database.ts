type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  favoriteMeal: string;
};

type Newsletter = {
  id: string;
  template: string;
  parameters: string[];
};

type Database = {
  user: {
    findOneByUsername: (username: string) => Promise<User | undefined>;
  };
  newsletter: {
    findOneById: (newsletterId: string) => Promise<Newsletter | undefined>;
  };
};

const initDatabaseClient = (): Database => ({
  user: {
    findOneByUsername: (username: string): Promise<User | undefined> => {
      return new Promise(resolve => {
        setTimeout(
          () =>
            resolve(
              'michel' === username
                ? {
                    id: 'userid',
                    firstname: 'Michel',
                    lastname: 'Drucker',
                    email: 'michel@francetv.fr',
                    favoriteMeal: 'blanquette de veau',
                  }
                : undefined
            ),
          Math.random() * 150
        );
      });
    },
  },
  newsletter: {
    findOneById: (newsletterId: string): Promise<Newsletter | undefined> => {
      return new Promise(resolve => {
        setTimeout(
          () =>
            resolve(
              'recipe' === newsletterId
                ? {
                    id: 'newsletterid',
                    parameters: ['firstname', 'lastname', 'favoriteMeal'],
                    template: `Hello {{firstname}} {{lastname}}!
We heard that you like to eat some {{favoriteMeal}}.
That's awesome because we have exactly the right recipe for you!
Go to our website to discover more ;)

Bisou`,
                  }
                : undefined
            ),
          Math.random() * 150
        );
      });
    },
  },
});

export {initDatabaseClient};
export type {Database};

import { getPeople } from './people';

const init = () => {
  const people = getPeople();
  if (!people.length) {
    return console.log('Active records not found');
  }
  return console.log(
    people
      .map(({ Name, Date, 'Favorite Movie': favoriteMovie }) =>
        [
          `Name: ${Name}`,
          `Date: ${Date?.toLocaleString()}`,
          `Favorite movie: ${favoriteMovie}`,
        ].join('\n')
      )
      .join('\n\n')
  );
};

init();

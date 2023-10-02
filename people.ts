import { Person } from './types';
import { peopleList } from './constants';

const mapPeople = () =>
  peopleList.map((person) => ({
    ...person,
    Date: new Date(),
  }));

const sortPeopleByKey = (
  people: Person[],
  key: keyof Person,
  dir: 'asc' | 'desc' = 'desc'
) =>
  people.sort((a, b) => {
    const direction = dir === 'asc' ? -1 : 1;
    return (a[key] || 0) > (b[key] || 0) ? 1 * direction : -1 * direction;
  });

const getPeople = () => {
  const sortedPeople = sortPeopleByKey(mapPeople(), 'Favorite Food');
  const activePeople = sortedPeople.filter(
    (person) => person.Status === 'Active'
  );
  return activePeople;
};

export { getPeople, mapPeople, sortPeopleByKey };

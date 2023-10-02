import { Person } from './types';
import { peopleList } from './constants';
import { getPeople, sortPeopleByKey } from './people';

describe('People', () => {
  it('should sort people by Name', () => {
    expect(sortPeopleByKey(peopleList, 'Name')[0]).toHaveProperty('Name', 'Donny');

    expect(sortPeopleByKey(peopleList, 'Name', 'asc')[0]).toHaveProperty(
      'Name',
      'Rocky'
    );
  });

  it('should return only active records', () => {
    const people = getPeople();
    expect(people[0]).toHaveProperty('Name', 'Matt')
    expect(people[1]).toHaveProperty('Name', 'Miroslav')
  });
});

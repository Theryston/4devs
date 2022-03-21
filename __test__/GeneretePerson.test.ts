import { GeneratePerson } from '../lib/index';

describe('Generate Person', () => {
  it('should be return name correct name and age', async () => {
    const person = {
      name: 'John',
      age: 19,
    };
    const generatePerson = new GeneratePerson(person.name, person.age);

    expect(generatePerson.name).toEqual(person.name);
    expect(generatePerson.age).toEqual(person.age);
  });
});

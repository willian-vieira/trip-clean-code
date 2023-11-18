const Trip = require('./Trip');

/**********************
 * Definir um Cenário;
 * Definir uma Entrada;
 * Avaliar uma Saída;
 ***********************/

test('Should be normal fare', function () {
    const fare = new Trip(new Date('2023-11-18T10:00'), 1000).calculateFare();
    expect(fare).toBe(2100);
});

test('Should be sunday fare', function () {
    const fare = new Trip(new Date('2023-11-19T10:00'), 1000).calculateFare();
    expect(fare).toBe(3000);
});

test('Should be overnight fare', function () {
    const fare = new Trip(new Date('2023-11-18T23:00'), 1000).calculateFare();
    expect(fare).toBe(3900);
});

test('Should be wrong date', function () {
    expect(() => new Trip('2023-11-18T23:00', 1000).calculateFare()).toThrow(Error);
});
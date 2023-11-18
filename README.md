# Projeto Clean Code com objetivo de refatorar um código ruim.

## Refatoração Realizando Testes - (Jest.js)
```
npm install jest --save-dev
```

## Código Ruim - index.js

#### Código a ser Refatorado:

```javaScript
const calcTrip = function (hour, dist) {
    if (hour instanceof Date) {
        //overnight
        if (hour.getHours() > 22 || hour.getHours() < 6) {
            //return dist + 3;
            return dist * 3.9;
        } else {

            //is sunday
            if (hour.getDay === 0) {
                //return dist * 2.2;
                return dist * 3;
            } else {
                //return dist * 2;
                return dist * 2.1;
            }
        }
    } else {
        return -1;
    }
};
```

## Teste - test.js

#### Teste criado direto no JS. Será substituído pelo Jest.js:

```javaScript
const taximiter = require('../index');

console.log('Should be normal fare', taximiter.calcTrip(new Date('2023-11-18T10:00'), 1000) === 2100);
console.log('Should be sunday fare', taximiter.calcTrip(new Date('2023-11-19T10:00'), 1000) === 3000);
console.log('Should be overnight fare', taximiter.calcTrip(new Date('2023-11-18T23:00'), 1000) === 3900);
console.log('Should be wrong date', taximiter.calcTrip('2023-11-18T23:00', 1000) === -1);
```



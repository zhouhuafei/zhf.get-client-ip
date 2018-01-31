const randomNum = require('../dist/index.min');

test(`randomNum(1,2); // 1 - 2`, () => {
    const num = randomNum(1, 2);
    console.log(num);
    const isTrue = num >= 1 && num <= 2;
    expect(true).toEqual(isTrue);
});

test(`randomNum(2); // 0 - 2`, () => {
    const num = randomNum(2);
    console.log(num);
    const isTrue = num >= 0 && num <= 2;
    expect(true).toEqual(isTrue);
});

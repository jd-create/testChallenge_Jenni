const { multiply } = require('../index');

test('multiply() function should return the multiplication of two numers', () => {

    //Arrange
    const num1 = 2;
    const num2 = 3;



    //Act
    const result = multiply(num1, num2);

    //Assert

    expect(result).toBe(6);
})

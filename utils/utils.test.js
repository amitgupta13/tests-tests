const expect = require('expect');
const utils = require('./utils');

it('should add 2 numbers', ()=>{
    var result = utils.add(1,2);

    expect(result).toBe(3).toBeA('number');
    // if(result !== 3){
    //     throw new Error(`Expcted 3 but got ${result}`);
    // }
});

it('should return square of a number', ()=>{
    var result = utils.square(2);

    expect(result).toBe(4).toBeA('number');

    // if(result !== 4){
    //     throw new Error(`Expcted 4 but got ${result}`);
    // }
});

it('blah blah blah',()=>{
    let user = {location:'kapasera', age:35};
    const res = utils.setName(user, 'Amit Gupta');
    expect(user).toEqual(res);
})

it('should async add 2 numbers', (done)=>{
    utils.asyncAdd(4, 3, (sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
})

it('should async square of a numbers', (done)=>{
    utils.asyncSquare(2, (square)=>{
        expect(square).toBe(4).toBeA('number');
        done();
    });
})

import React from 'react';
import {mount, shallow} from 'enzyme';
import Grid from "../Grid2";
import useTicTacToe from "../useTicTacToe";


describe('<Grid2/>', () => {

    it('should return the div with the winner', function () {
        const comp = shallow(<Grid/>);
        console.log(comp.debug());
    });

});

// define empty mock function
const fnClick = jest.fn();
describe('click events', () => {
    it('button click should show menu', () => {
        //replace actual function with mock function
        const component = shallow(<button onClick={fnClick}/>);

        //simulate a click
        component
            .find('button')
            .simulate('click');

        //check if function was called
        expect(fnClick).toHaveBeenCalled();
    });
});

describe('<Grid2/>', () => {

    it('should check that the div is called', function () {
        const comp = mount(<Grid/>);
        comp.find('div.grid').first()
            .simulate('click');

        console.log(comp.debug());

        expect(comp.debug()).toMatchSnapshot();

    });

});

// const myMock = jest.fn();
// console.log(myMock('return this string'));
// // > return this string
//
// // return `true` for first call,
// // return `false` for the second call
// // return a string 'hello mock' for the third call
// myMock.mockReturnValueOnce(true)
//     .mockReturnValueOnce(false)
//     .mockReturnValueOnce('hello mock');
// //call the mock three times to witness the results:
// console.log(myMock(), myMock(), myMock());
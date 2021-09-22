import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import  { shallow } from 'enzyme';
import Landing from '../Landing/Landing';



afterEach(() => {
    cleanup();
});


test('test for Landing', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>);
    const btn = fireEvent.click(screen.getByText(/Go Home/i));
        expect(btn).toBeTruthy();
});

test('testing openHome', () => {
    const history = []
    const wrapper = shallow(<Landing.WrappedComponent history={history} />);
    wrapper.instance().openHome();
    expect(history).toContain('/home');
});


test('testing callPropsFunc ', () => {
    const history = []
    const mck = jest.fn();
    const wrapper = shallow(<Landing.WrappedComponent history={history} sharedFunc={mck} />);
    wrapper.instance().callPropsFunc();
    expect(mck).toBeCalled();

});









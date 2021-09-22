import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import Home from '../Home/Home';
import mockedAxios from 'axios';



afterEach(() => {

    cleanup();
});


test('testing home', () => {
    const response = {
        data: {
                
                    first_name:'Janet'       
        }
    }
    mockedAxios.get.mockResolvedValue({ data: response })
    render(<Home />);
    fireEvent.click(screen.getByText(/Get Name/i));
    expect(mockedAxios.get).toBeCalled();

});






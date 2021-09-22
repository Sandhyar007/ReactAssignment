import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Warning from '../Warning/Warning';

afterEach(() => {
    cleanup();
});

test('warning test', () => {

    render(<Warning />);
    const clkbtn = fireEvent.click(screen.getByText(/Update/i));
    expect(clkbtn).toBeTruthy();
    
})
test('testing onClose', () => {
    
    
});
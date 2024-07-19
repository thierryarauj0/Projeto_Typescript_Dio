// CustomButton.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomButton from '../components/FormLogin/CustomButton';  

describe('CustomButton', () => {
    it('deve chamar função onClick quando clicado', () => {
        const onClick = jest.fn();
        render(<CustomButton onClick={onClick}>Entrar</CustomButton>);

        fireEvent.click(screen.getByText('Entrar'));
        expect(onClick).toHaveBeenCalled();
    });
});

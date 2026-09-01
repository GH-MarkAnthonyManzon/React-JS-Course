import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CheckoutHeader } from './CheckoutHeader';

describe('CheckoutHeader Component', () => {
    let cart;

    beforeEach(() => {
        cart = [{
            "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            "quantity": 2,
        }, {
            "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            "quantity": 1,
        }];
    });

    it('Clickable logo, navigates to home page', () => {
        render(
            <MemoryRouter>
                <CheckoutHeader cart={cart} />
            </MemoryRouter>
        )

        const logo = screen.getByTestId('checkout-header-logo');
        expect(logo).toHaveAttribute('src', '/src/assets/images/logo.png');

        const mobileLogo = screen.getByTestId('checkout-header-mobile-logo');
        expect(mobileLogo).toHaveAttribute('src', '/src/assets/images/mobile-logo.png');

        const returnToHomeLink = screen.getByTestId('checkout-header-return-to-home');
        expect(returnToHomeLink).toHaveTextContent('3 items');
        expect(returnToHomeLink).toHaveAttribute('href', '/');
    });
});
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DeliveryDate } from './DeliveryDate';

describe('DeliveryDate Component', () => {
  it('displays the selected delivery date', () => {
    const cartItem = {
      deliveryOptionId: '1',
    };

    const deliveryOptions = [
      {
        id: '1',
        estimatedDeliveryTimeMs: new Date('2024-01-15T12:00:00Z').getTime(),
      },
    ];

    render(
      <DeliveryDate
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
      />
    );

    expect(screen.getByText('Delivery date: Monday, January 15')).toBeInTheDocument();
  });
});
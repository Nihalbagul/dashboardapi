import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';
import { ProductProvider } from '../context/ProductContext';

test('renders product list', () => {
    render(
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    );
    expect(screen.getByText(/price/i)).toBeInTheDocument();
});

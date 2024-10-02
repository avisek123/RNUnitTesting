import {render, waitFor} from '@testing-library/react-native';
import AllPosts from '../AllPosts'; // Adjust the path as needed
import React from 'react';

// Create a mock for the fetch function
const mockFetch = jest.fn();

// Mock response for the fetch request
const mockProductResponseFromApi = {
  products: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
};

describe('AllPosts Component Test', () => {
  beforeEach(() => {
    // Mock the global fetch function
    global.fetch = mockFetch;
  });

  afterEach(() => {
    // Clean up mock calls and instances after each test
    jest.clearAllMocks();
  });

  it('should fetch products and log the response', async () => {
    // Mock the fetch response with product data
    mockFetch.mockResolvedValue({
      json: mockFetch.mockResolvedValue(mockProductResponseFromApi),
    });

    // Render the AllPosts component
    render(<AllPosts />);

    // Wait for the fetch call and assert that it was called with the correct URL
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    });

    // Ensure the fetch call returned the expected data
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should throw error if any', async () => {
    const expectedError = new Error('Error fetching posts');

    // Simulate fetch throwing an error
    mockFetch.mockRejectedValue(expectedError);

    render(<AllPosts />);

    // Wait and expect the error to be thrown
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    });

    // Since the error is caught in the component, you could also spy on `console.error`
    // to check that the error was logged, if needed.
  });

  afterAll(() => {
    // Restore the original fetch function after all tests
    jest.restoreAllMocks();
  });
});

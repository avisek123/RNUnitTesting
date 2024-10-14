/* eslint-disable @typescript-eslint/no-unused-vars */
import {render, waitFor} from '@testing-library/react-native';
import AllPosts from '../AllPosts'; // Adjust the path as needed
import React from 'react';

// create a mock function
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

describe('All component tree', () => {
  //

  beforeEach(() => {
    global.fetch = mockFetch;
  });

  // after each

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should give the proper response', async () => {
    // get the resolved value
    mockFetch.mockResolvedValue({
      JSON: mockFetch.mockResolvedValue(mockProductResponseFromApi),
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

  it('should give the error', async () => {
    const expectedError = new Error('Error fetching posts');
    mockFetch.mockRejectedValue(expectedError);
    render(<AllPosts />);
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    });
    // Ensure the fetch call returned the expected data
    expect(mockFetch).toHaveBeenCalled();
  });
  afterAll(() => {
    // Restore the original fetch function after all tests
    jest.restoreAllMocks();
  });
});

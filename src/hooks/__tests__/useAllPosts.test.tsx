import {act, renderHook} from '@testing-library/react-hooks';
import useAllPosts from '../useAllPosts'; // Adjust path as needed

const mockFetch = jest.fn();

// Mock API Response
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

describe('useAllPosts Hook', () => {
  beforeEach(() => {
    // Mock global fetch before every test
    global.fetch = mockFetch;
  });

  afterEach(() => {
    // Clear mocks after each test
    jest.clearAllMocks();
  });

  it('should fetch and return products successfully', async () => {
    // Mock a successful fetch response
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockProductResponseFromApi),
    });

    const {result, waitForNextUpdate} = renderHook(() => useAllPosts());

    // Wait for the state to update after fetch completes
    await waitForNextUpdate();

    // Assertions
    expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(result.current.posts).toEqual(mockProductResponseFromApi.products);
  });

  it('should handle fetch errors', async () => {
    const expectedError = new Error('Failed to fetch');

    // Mock fetch to throw an error
    mockFetch.mockRejectedValueOnce(expectedError);

    const consoleErrorSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    // Render the hook
    await act(async () => {
      renderHook(() => useAllPosts());
    });

    // Assertions
    expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/products');

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching posts:',
      expectedError,
    );

    // Cleanup console spy
    consoleErrorSpy.mockRestore();
  });

  afterAll(() => {
    // Restore global fetch
    jest.restoreAllMocks();
  });
});

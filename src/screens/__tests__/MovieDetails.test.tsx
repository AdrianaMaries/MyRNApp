import {screen} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from '../../../testUtils/renderWithProviders';
import {useGetMovieByIdQuery} from '../../redux/api';
import MovieDetails, {MovieDetailsProps} from '../MovieDetails';

jest.mock('../../redux/api.tsx', () => {
  const actual = jest.requireActual('../../redux/api.tsx');
  return {
    ...actual,
    useGetMovieByIdQuery: jest.fn(() => ({})),
  };
});

function renderComponent() {
  const route = {params: {id: 1}} as unknown as MovieDetailsProps['route'];
  const navigation = {
    navigate: jest.fn(),
  } as unknown as MovieDetailsProps['navigation'];
  return renderWithProviders(
    <MovieDetails route={route} navigation={navigation} />,
  );
}

describe('MovieDetails', () => {
  it('should render movie title', async () => {
    (useGetMovieByIdQuery as jest.Mock).mockReturnValueOnce({
      data: {
        backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        release_date: '1994-09-23',
        runtime: 142,
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        original_title: 'The Shawshank Redemption',
      },
    });

    renderComponent();

    const title = await screen.findByText('The Shawshank Redemption');

    expect(title).not.toBeUndefined();
  });
});

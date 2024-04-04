import {screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from '../../../testUtils/renderWithProviders';
import MovieItem from '../MovieItem';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

function renderComponent() {
  return renderWithProviders(
    <MovieItem
      id={278}
      original_title="The Shawshank Redemption"
      vote_average={8.704}
      release_date="1994-09-23"
      poster_path="/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
    />,
  );
}

describe('MovieItem', () => {
  it('should render the movie title', async () => {
    renderComponent();

    const title = await screen.findByText('The Shawshank Redemption');

    expect(title).not.toBeUndefined();
  });

  it('should render the release date', async () => {
    renderComponent();

    const releaseDate = await screen.findByText('1994-09-23');

    expect(releaseDate).not.toBeUndefined();
  });

  it('should render the rating', async () => {
    renderComponent();

    const ratingText = await screen.findByText('Rating: 8.704');

    expect(ratingText).not.toBeUndefined();
  });

  it('should render the movie poster', async () => {
    renderComponent();

    const poster = await screen.findByLabelText('movieImage');

    expect(poster).toHaveProp('source', {
      uri: 'https://image.tmdb.org/t/p/w1280/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    });
  });

  it('should navigate to movie details when pressed', async () => {
    renderComponent();

    const user = userEvent.setup();
    await user.press(screen.root);

    expect(mockedNavigate).toHaveBeenNthCalledWith(1, 'Details', {itemId: 278});
  });
});

import {useNavigation} from '@react-navigation/native';
import {Text, Image, Card, Heading} from '@gluestack-ui/themed';
import {MovieDetailsProps} from '../screens/MovieDetails';
import React from 'react';
import {TouchableHighlight} from 'react-native';

interface MovieItemsProps {
  id: number;
  original_title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

export default function MovieItem({
  id,
  original_title,
  vote_average,
  release_date,
  poster_path,
}: MovieItemsProps) {
  const navigation = useNavigation<MovieDetailsProps['navigation']>();

  function selectMovie() {
    navigation.navigate('Details', {
      itemId: id,
    });
  }

  return (
    <TouchableHighlight
      onPress={() => {
        selectMovie();
      }}>
      <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
        <Image
          mb="$6"
          h={240}
          width="$full"
          $xs-borderRadius="$md"
          alt="movieImage"
          source={{
            uri: 'https://image.tmdb.org/t/p/w1280/' + poster_path,
          }}
        />
        <Heading size="md" fontFamily="$heading" mb="$4">
          {original_title}
        </Heading>
        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontFamily="$heading"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}>
          {release_date}
        </Text>
        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontFamily="$heading"
          fontWeight="$bold"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: 'blue',
            _dark: {
              color: '$textDark200',
            },
          }}>
          Rating: {vote_average}
        </Text>
      </Card>
    </TouchableHighlight>
  );
}

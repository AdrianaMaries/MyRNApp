import {Card, Heading, Image, ScrollView, Text} from '@gluestack-ui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RatingItem} from '../component/RatingItem';
import {RootStackParamList} from '../component/RootNavigator';
import {useGetMovieByIdQuery} from '../redux/api';

export type MovieDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export default function MovieDetails({route}: MovieDetailsProps) {
  const {itemId} = route.params;
  const {data} = useGetMovieByIdQuery(itemId);

  if (!data) {
    return null;
  }

  return (
    <ScrollView mb={32}>
      <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
        <Image
          mb="$6"
          h={240}
          width="$full"
          $xs-borderRadius="$md"
          alt="movieImage"
          source={{
            uri: 'https://image.tmdb.org/t/p/w1280/' + data.backdrop_path,
          }}
        />
        <Heading size="md" fontFamily="$heading" mb="$4">
          {data.original_title}
        </Heading>
        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}>
          {data.release_date} * {data.runtime} min
        </Text>
        <Text
          fontSize="$sm"
          fontStyle="italic"
          fontFamily="$heading"
          fontWeight="$bold"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}>
          {data.tagline}
        </Text>

        <Text
          size="md"
          fontFamily="$heading"
          mt="$4"
          mb="$2"
          fontWeight="$bold">
          Overview
        </Text>
        <Text
          fontSize="$sm"
          fontStyle="normal"
          fontWeight="$normal"
          lineHeight="$sm"
          mb="$2"
          sx={{
            color: '$textLight700',
            _dark: {
              color: '$textDark200',
            },
          }}>
          {data.overview}
        </Text>
      </Card>

      <RatingItem voteAverage={data.vote_average} />
    </ScrollView>
  );
}

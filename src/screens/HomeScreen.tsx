import * as React from 'react';
import {Movie, useGetMoviesQuery} from '../redux/api';
import {FlatList, RefreshControl, Spinner} from '@gluestack-ui/themed';
import {Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useState} from 'react';
import MovieItem from '../component/MovieItem';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen() {
  const {data, isLoading, isError} = useGetMoviesQuery();
  const [refreshing, setRefreshing] = useState(false);

  console.log(data);

  if (!data) {
    return null;
  }

  if (isError) {
    Alert.alert('Something went wrong!');
  }

  if (isLoading) {
    return <Spinner size="large" />;
  }

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <FlatList
      data={data.results}
      renderItem={renderMovie}
      keyExtractor={item => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
}

function renderMovie(itemData: {item: Movie}) {
  return (
    <MovieItem
      id={itemData.item.id}
      original_title={itemData.item.original_title}
      vote_average={itemData.item.vote_average}
      release_date={itemData.item.release_date}
      poster_path={itemData.item.backdrop_path}
    />
  );
}

import {
  Avatar,
  AvatarFallbackText,
  Card,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';

interface RatingItemProps {
  voteAverage: number;
}

export function RatingItem({voteAverage}: RatingItemProps) {
  return (
    <Card p="$5" borderRadius="$lg" maxWidth={360} ml="$3" mr="$3" mb={16}>
      <View flexDirection="row">
        <View flex={3}>
          <Text
            fontSize="$md"
            fontStyle="normal"
            fontWeight="$bold"
            lineHeight="$sm"
            mb={12}
            sx={{
              color: '$textLight700',
              _dark: {
                color: '$textDark200',
              },
            }}>
            User{'\n'}Score
          </Text>
        </View>
        <View flex={2}>
          <Text
            fontSize="$lg"
            fontStyle="normal"
            fontWeight="$bold"
            lineHeight="$sm"
            mt={12}
            sx={{
              color: '$textLight700',
              _dark: {
                color: '$textDark200',
              },
            }}>
            {voteAverage * 10}
          </Text>
        </View>
        <View flex={6}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarFallbackText>%</AvatarFallbackText>
          </Avatar>
        </View>
      </View>
    </Card>
  );
}

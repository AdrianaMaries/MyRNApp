import {Button, ImageBackground, Text} from '@gluestack-ui/themed';
import {ButtonText, Box, ScrollView} from '@gluestack-ui/themed';
import {Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {login} from '../redux/authSlice';
import {InputField} from '@gluestack-ui/themed';
import {Input} from '@gluestack-ui/themed';
import React from 'react';

function LoginScreen() {
  const defaultUsername = 'Aaaa';
  const defaultPass = 'Passs';

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: {username: string; password: string}) => {
    if (data.username === defaultUsername && data.password === defaultPass) {
      dispatch(login());
    } else {
      Alert.alert('Error', 'Incorrect username or password!');
    }
  };
  const image = {
    uri: 'https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg',
  };
  return (
    <ScrollView backgroundColor="$white" padding={16}>
      <View>
        <ImageBackground height={240} source={image} resizeMode="cover" />
      </View>

      <Box paddingBottom={'$4'} paddingTop={'$4'}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}>
              <InputField
                placeholder="Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input>
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}
      </Box>

      <Box paddingBottom={'$8'}>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}>
              <InputField
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input>
          )}
          name="password"
        />
      </Box>
      <Button
        action={'primary'}
        variant={'solid'}
        size={'md'}
        isDisabled={false}
        onPress={handleSubmit(onSubmit)}>
        <ButtonText>Login</ButtonText>
      </Button>
    </ScrollView>
  );
}
export default LoginScreen;

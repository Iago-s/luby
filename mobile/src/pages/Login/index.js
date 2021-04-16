import React, {useState, useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {UserContext} from '../../context/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../styles/colors';
import api from '../../services/api';

import {Container, Logo, InputContainer, Input, ErrorMessage, Button} from './styles';
import {Title} from '../../styles';

export default function Login({navigation}) {
  const context = useContext(UserContext);
  const [userName, setUserName] = useState('');

  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    status: false,
    message: '',
  });

  async function login() {
    setLoading(true);

    if(userName === '') {
      setMessageError({status: !messageError.status, message: 'Campo obrigatorio'});

      setTimeout(() => {
        setMessageError({...messageError, status: false});
      }, 2000);

      setLoading(false);
      return;
    }

    try {
      const response = await api.get(`${userName}`);

      const data = {
        login: response.data.login,
        name: response.data.name,
        email: response.data.email,
        location: response.data.location,
        company: response.data.company,
        bio: response.data.bio,
        avatar_url: response.data.avatar_url,
        followers_url: response.data.followers_url,
        following_url: response.data.following_url.replace('{/other_user}', ''),
        organizations_url: response.data.organizations_url,
        starred_url: response.data.starred_url.replace('{/owner}{/repo}', ''),
        repos_url: response.data.repos_url,
        public_repos: response.data.public_repos,
        public_gists: response.data.public_gists,
        followers: response.data.followers,
        following: response.data.following,
      }

      context.setUser(data);

      setLoading(false);
      setUserName('');

      navigation.navigate('MainNavigation');
    } catch(err) {
      setMessageError({status: true, message: 'Usúario não existe'});

      setTimeout(() => {
        setMessageError({...messageError, status: false});
      }, 2000);

      setLoading(false);
    }
  }

  return(
    <Container>
      <Logo>
        <Icon name="github" size={150} color={colors.yellow}/>
      </Logo>
      <InputContainer>
        <Input 
          placeholder="Usúario" 
          isError={messageError.status}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        {messageError.status && (<ErrorMessage>{messageError.message}</ErrorMessage>)}
      </InputContainer>
      <Button onPress={login}>
        {
          loading ? <ActivityIndicator color={colors.black}/> : (
            <>
              <Title action>ENTRAR</Title>
              <Icon name="arrow-right" size={30} color={colors.black}/>
            </>
          )
        }
      </Button>
    </Container>
  );
}
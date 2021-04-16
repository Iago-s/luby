import React, {useEffect ,useContext, useState} from 'react';
import {UserContext} from '../../context/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoadingPage from '../../components/LoadingPage';
import Header from '../../components/Header';
import BackAndNextButton from '../BackAndNextButton';

import api from '../../services/api';
import colors from '../../styles/colors';

import {Container, Button, BoxContainer, Box, Image, ImageContainer, PersonalInfos, NumbersContainer} from './styles';
import {SafeArea, Text, TextDescription, Head, Mark, Title} from '../../styles';

export default function UserInfos({navigation, isNewUser, userName, setUserIsChanged}) {
  const context = useContext(UserContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  function logout() {
    navigation.navigate('Login');
  }
  
  function save() {
    context.setUser(user);
    navigation.navigate('Profile');
  }

  useEffect(() => {
    async function getUserDatas() {
      setLoading(true);
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

      setUser(data);
      setLoading(false);
    }

    getUserDatas();
  }, []);

  return(
    <>
      {
        loading ? (<LoadingPage/>) : (
          <SafeArea>
            <Container>
              <Header justify={isNewUser && 'space-between'}>
                {
                  isNewUser && (
                    <BackAndNextButton 
                      iconColor={colors.white} 
                      iconSize={30} 
                      iconName="arrow-left"
                      onPress={() => setUserIsChanged(false)}
                    />
                  )
                }
                <Text bold>{user.login}</Text>
                {
                  isNewUser ? (
                    <Button onPress={save}>
                      <Text marginRight={10} fontSize={20}>Salvar</Text>
                      <Icon name="exit-to-app" size={30} color={colors.green}/>
                    </Button>
                  ) : (
                    <Button onPress={logout}>
                      <Text marginRight={10} fontSize={20}>Sair</Text>
                      <Icon name="exit-to-app" size={30} color={colors.red}/>
                    </Button>
                  )
                }
                
              </Header>
              <BoxContainer>
                <Box black/>
                <Box />
                <ImageContainer>
                  <Image source={{uri: user.avatar_url}}/>
                </ImageContainer>
              </BoxContainer>
              <PersonalInfos>
                <Head>
                  <Mark />
                  <Title fontSize={26}>{user.name}</Title>
                </Head>
                {
                  context.user.email && (
                    <TextDescription>{user.email}</TextDescription>
                  )
                }
                <TextDescription>{user.location}</TextDescription>
              </PersonalInfos>
              <PersonalInfos 
                padding={10} 
                color={colors.grayLight} 
                row 
                justify="space-between"
              >
                <NumbersContainer 
                  onPress={() => {
                    if(isNewUser) {
                      return;
                    }
                    navigation.navigate('Followers');
                  }}
                >
                  <Title fontSize={40}>{user.followers}</Title>
                  <TextDescription>Seguidores</TextDescription>
                </NumbersContainer>
                <NumbersContainer
                  onPress={() => {
                    if(isNewUser) {
                      return;
                    }
                    navigation.navigate('Following');
                  }}
                >
                  <Title fontSize={40}>{user.following}</Title>
                  <TextDescription>Seguindo</TextDescription>
                </NumbersContainer>
                <NumbersContainer
                  onPress={() => {
                    if(isNewUser) {
                      return;
                    }
                    navigation.navigate('Repos');
                  }}
                >
                  <Title fontSize={40}>{user.public_repos}</Title>
                  <TextDescription>Repos</TextDescription>
                </NumbersContainer>
              </PersonalInfos>
              <PersonalInfos style={{height: '100%'}}>
                <Head>
                  <Mark />
                  <Title fontSize={26}>Bio</Title>
                </Head>
                <TextDescription>{user.bio}</TextDescription>
              </PersonalInfos>
            </Container>
          </SafeArea>
        )
      }
    </>
  );
}
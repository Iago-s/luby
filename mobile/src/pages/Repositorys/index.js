import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from '../../context/User';

import api from '../../services/api';
import colors from '../../styles/colors';

import LoadingPage from '../../components/LoadingPage';
import Header from '../../components/Header';
import BackAndNextButton from '../../components/BackAndNextButton';

import { Repo, IconsContainer } from './styles';
import { Text, TextDescription, List, Head, Mark } from '../../styles';

export default function Repositorys({navigation}) {
  const [loading, setLoading] = useState(false);
  const context = useContext(UserContext);
  const [repositorys, setRepositorys] = useState([]);

  useEffect(() => {
    async function getRepos() {
      setLoading(true);
      try {
        const response = await api.get(context.user.repos_url);
        const data = response.data.map((value, index) => {
          return {
            id: value.id,
            name: value.name,
            description: value.description,
            totalStars: value.stargazers_count,
          }
        });
        setRepositorys(data);
        setLoading(false);
      } catch (err) {
        console.log('Error', err);
      }
    }

    getRepos();
  }, []);

  return (
    <>
      {
        loading ? <LoadingPage /> : (
          <>
            <Header>
              <BackAndNextButton 
                iconName="arrow-left" 
                iconSize={20} 
                iconColor={colors.white} 
                onPress={() => navigation.navigate('Profile')}
              />
              <Text bold>
                {
                  repositorys.length === 0 ? 
                  ' Nenhum repositório' : 
                  repositorys.length + ' Repositórios'
                }
              </Text>
              <Text></Text>
            </Header>
            <List>
              {
                repositorys.length === 0 ? (
                  <Text bold>Este usúario não tem repositórios</Text>
                ) :
                  repositorys.map((value, index) => (
                    <Repo key={value.id}>
                      <Head>
                        <Mark />
                        <Text bold fontSize={20}>{value.name}</Text>
                      </Head>
                      <TextDescription>
                        {value.description ? value.description : ''}
                      </TextDescription>
                      <IconsContainer>
                        <TextDescription style={{ width: '70%' }}>
                          <Icon name="star-outline" size={20} color={colors.yellow} />
                          {'  '}
                          {value.totalStars}
                        </TextDescription>
                        <TextDescription style={{ width: '30%' }} align="right">
                          <Icon name="lock-open-variant-outline" size={20} color={colors.green} />
                          {'  '}
                          <Icon name="lock-outline" size={20} color={colors.red} />
                        </TextDescription>
                      </IconsContainer>
                    </Repo>
                  ))
              }
            </List>
          </>
        )
      }
    </>
  );
}
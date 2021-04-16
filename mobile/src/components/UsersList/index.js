import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../context/User';

import LoadingPage from '../../components/LoadingPage';
import Header from '../../components/Header';
import BackAndNextButton from '../../components/BackAndNextButton';
import UserInfos from '../../components/UserInfos';

import api from '../../services/api';
import colors from '../../styles/colors';

import {Repo, DevImage} from './styles';
import {Text, List, Head, Mark} from '../../styles';

export default function UsersList({ name, navigation }) {
  const context = useContext(UserContext);
  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(false);
  const [userIsChanged, setUserIsChanged] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    async function getDatas() {
      setLoading(true);

      if (name === 'seguidores') {
        try {
          const response = await api.get(context.user.followers_url);

          if (response.data.length > 0) {
            const data = response.data.map((value, index) => {
              return {
                userName: value.login,
                avatar_url: value.avatar_url,
                url: value.url,
              }
            });

            setDatas(data);
          }
          setLoading(false);
        } catch (err) {
          console.log('Error', err);
        }
        return;
      }

      if (name === 'seguindo') {
        try {
          const response = await api.get(context.user.following_url);

          if (response.data.length > 0) {
            const data = response.data.map((value, index) => {
              return {
                userName: value.login,
                avatar_url: value.avatar_url,
                url: value.url,
              }
            });

            setDatas(data);
          }
          setLoading(false);
        } catch (err) {
          console.log('Error', err);
        }
        return;
      }
    }

    getDatas();
  }, []);

  return (
    <>
      {
        loading ? <LoadingPage /> : 
          userIsChanged ? (
            <>
              <UserInfos 
                isNewUser={true} 
                userName={newUserName} 
                navigation={navigation} 
                setUserIsChanged={setUserIsChanged}
              />
            </>
          ) : (
            <>
              <Header>
                <BackAndNextButton 
                  iconName="arrow-left" 
                  iconSize={20} 
                  iconColor={colors.white} 
                  onPress={() => {
                    name === 'seguidores' ? 
                      navigation.navigate('Repos') : 
                      navigation.navigate('Followers');
                  }}
                />
                <Text bold>
                  {
                    datas.length === 0 ?
                      ' Não segue ninguém' :
                      datas.length + ' ' + name
                  }
                </Text>
                <Text></Text>
              </Header>
              <List style={{paddingTop: 30}}>
                {
                  datas.map((value, index) => (
                    <Repo style={{marginBottom: index === datas.length - 1 ? 50 : 0}}>
                      <Head>
                        <Mark />
                        <DevImage source={{uri: value.avatar_url}}/>
                        <Text bold fontSize={20} style={{width: '55%'}}>
                          {value.userName}
                        </Text>
                        <BackAndNextButton
                          iconName="arrow-right"
                          iconSize={30}
                          iconColor={colors.white}
                          onPress={() => {
                            setUserIsChanged(true);
                            setNewUserName(value.userName);
                          }}
                        />
                      </Head>
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
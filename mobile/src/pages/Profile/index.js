import React, {useContext} from 'react';
import {UserContext} from '../../context/User';

import UserInfos from '../../components/UserInfos';

export default function Profile({navigation}) {
  const context = useContext(UserContext);

  return(
    <UserInfos navigation={navigation} userName={context.user.login}/>
  );
}
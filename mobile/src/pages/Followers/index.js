import React from 'react';

import UsersList from '../../components/UsersList';

export default function Followers({navigation}) {
  return(
    <UsersList name="seguidores" navigation={navigation}/>
  );
}
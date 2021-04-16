import React from 'react';

import UsersList from '../../components/UsersList';

export default function Following({navigation}) {
  return(
    <UsersList name="seguindo" navigation={navigation}/>
  );
}
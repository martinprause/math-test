import React from 'react';
import { Route } from 'react-router-native';
import { View } from 'react-native';

import Home from '../components/Home';
import Welcome from '../components/Welcome';
import AccountEdit from '../components/AccountEdit';

const Routes = () => <View style={{ flex: 1 }}>
	<Route exact path="/" component={Welcome} />
	<Route path="/home" component={Home}/>
	<Route path="/account-edit" component={AccountEdit}/>
</View>

export default Routes;
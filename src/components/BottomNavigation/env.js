// @flow
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui/svg-icons/action/home';
import React from 'react';

type EnvBottomNavigationPropsType = {
  bigScreen: boolean,
};

const EnvBottomNavigation = ({ bigScreen }: EnvBottomNavigationPropsType) => (
  <BottomNavigation>
    <BottomNavigationItem
      label={bigScreen ? 'Airlala on Web' : 'Airlala on Mobile'}
      icon={<HomeIcon />}
    />
  </BottomNavigation>
);

export default EnvBottomNavigation;

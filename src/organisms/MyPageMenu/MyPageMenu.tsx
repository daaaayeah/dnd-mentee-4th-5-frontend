import React from 'react';
import { View } from 'react-native';

import MenuItem from '../../atoms/MenuItem';

const MyPageMenu: React.FC = () => {
  return (
    <View>
      <MenuItem text="개인정보 수정" />
      <MenuItem text="개인정보 취급 방침" />
      <MenuItem text="콜리 이용약관" />
      <MenuItem text="콜리 계정 탈퇴" />
    </View>
  );
};

export default MyPageMenu;
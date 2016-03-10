import React from 'react';
import ContainerComponent from './quick_sell_pulish';
import HeaderButton from '../../../public/javascripts/components/header/header_button';

export default class App extends React.Component {

  render() {
    return (
      <div>
      	<HeaderButton />
        <ContainerComponent />
      </div>
    )
  }

}
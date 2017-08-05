import React, { Component } from 'react';
import {
  Text,
  View, ListView
} from 'react-native';

class Home extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['Promo 1', 'Promo 2']),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default Home;
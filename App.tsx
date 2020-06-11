import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import Vimeo from "./Vimeo";
import Wistia from "./Wistia";




class App extends React.Component {

render() {
    return (
        <View  style={styles.container}>
            <Vimeo vimeoVideoID={"428128204"}></Vimeo>
            <Wistia wistiaVideoID={"94imvui50f"}></Wistia>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      height: '100%',
      width: '100%',
      marginTop: 30
  }
});
export default App;


import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
// @ts-ignore
import Vimeo from '@u-wave/react-vimeo';
//const Vimeo = require('@u-wave/react-vimeo');
import { Video } from 'expo-av';

export default function App() {
    const escFunction = useCallback((event) => {
        if(event.keyCode === 32) {
            //Do whatever when spacebar is pressed
            alert("hey");

        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Vimeo
          video="412342027"
          autoplay
          responsive
      />
      <View><Video
    source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={{ width: 300, height: 300 }}
        /></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

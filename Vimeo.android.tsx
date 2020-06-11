import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import { WebView } from 'react-native-webview';

interface Props {
    vimeoVideoID: string;
}
interface State {
}



class Vimeo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { width, height } = Dimensions.get('window');
        const htmlStyleFix = `<style type="text/css">iframe{max-width: 100%;}</style>`;
        const sourceLink = "https://player.vimeo.com/video/"+this.props.vimeoVideoID;
        return (
            <View  style={styles.container}>
                <WebView
                    scalesPageToFit={true}
                    bounces={false}
                    javaScriptEnabled
                    allowsFullscreenVideo={true}
                    style={{ height: 500, width: width, marginTop: 35 }}
                    source={{
                        html: `
${htmlStyleFix}
                  <!DOCTYPE html>
                  <html>
                    <body>
                      <div id="baseDiv">
                       <iframe src=${sourceLink} width="100%" height="655" frameborder="0" playsline: true allow="autoplay; fullscreen" allowfullscreen mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                       </iframe>
                     </div>
                    </body>
                  </html>
            `,
                    }}
                    automaticallyAdjustContentInsets={false}
                />
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
        width: '100%'
    }
});
export default Vimeo;


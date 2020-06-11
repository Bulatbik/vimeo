import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';
interface Props {
    wistiaVideoID: string;
}

interface State {}

class Wistia extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        const { width, height } = Dimensions.get('window');
        const htmlStyleFix = `<style type="text/css">iframe{max-width: 100%;}</style>`;
        return (
                <WebView
                    scalesPageToFit={true}
                    bounces={false}
                    javaScriptEnabled
                    allowsFullscreenVideo={true}
                    style={{ height: height, width: width }}
                    source={{
                        html: `
${htmlStyleFix}
                  <!DOCTYPE html>
                  <html>
                    <body>
                     <script src=("https://fast.wistia.com/embed/medias/"+${this.props.wistiaVideoID}+".jsonp?autoPlay=true") async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_94imvui50f videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/94imvui50f/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
                    </body>
                  </html>
            `,
                    }}
                    automaticallyAdjustContentInsets={false}
                />
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
export default Wistia;


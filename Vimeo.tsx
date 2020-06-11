import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
;
interface Props {
    vimeoVideoID: string;
}

interface State {}


class Vimeo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const sourceLink = "https://player.vimeo.com/video/"+this.props.vimeoVideoID+"?playsinline=1&autoplay=1";
        return (
            <View  style={styles.container}>
                <iframe
                    src={sourceLink}
                    style={{width: "100%", height: "100%"}}  scrolling="no" frameBorder="0"
                     allowFullScreen allow="autoplay; fullscreen"></iframe>
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


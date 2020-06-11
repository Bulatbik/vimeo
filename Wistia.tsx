import React, {useRef, useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

interface Props {
    wistiaVideoID: string;
}

interface State {}


class Wistia extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        const wistiaSourceLink = "//fast.wistia.net/embed/iframe/"+this.props.wistiaVideoID+"?videoFoam=true&autoPlay=true";
        return (
            <View  style={styles.container}>
                    <iframe src={wistiaSourceLink} style={{width: "100%", height: "100%"}}
                            frameBorder="0" scrolling="no" className="wistia_embed"
                            name="wistia_embed"  allowFullScreen
                    ></iframe>
                    <script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>
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
        height: "100%",
        width: "100%"
    }

});
export default Wistia;


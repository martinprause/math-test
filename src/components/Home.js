import {connect} from 'react-redux';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ENTRIES2 } from './entires';
import SliderEntry from './SliderEntry';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = EStyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
        marginHorizontal: 20,
    },
    slider: {
        height: '70%'
    },
    sliderContentContainer: {},
    footer: {
        height: '10%',
        backgroundColor: 'red',
    }

});


class Home extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    wp = (percentage) => {
        const value = (percentage * viewportWidth) / 100;
        return Math.round(value);
    }

    renderHeader = () => {
        const {user} = this.props;
        return (
            <View style={styles.header}>
                <Text>{user.displayName}</Text>
                <Text>Score: {user.scriptData.totalScore}</Text>
            </View>
        );
    }

    render() {
        const sliderWidth = viewportWidth;
        const slideWidth = this.wp(75);
        const itemHorizontalMargin = this.wp(2);
        const itemWidth = slideWidth + itemHorizontalMargin;

        return (
            <View style={styles.wrapper}>
                {this.renderHeader()}
                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    hasParallaxImages={true}
                    enableMomentum={false}
                    loop={false}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    removeClippedSubviews={false}
                />
                <View style={styles.footer}>

                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user,
    }
}

export default connect(mapStateToProps)(withRouter(Home));
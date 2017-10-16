import React, {Component} from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import EStyleSheet from 'react-native-extended-stylesheet';

import {CATEGORIES} from '../../fake-data/categories';
import {sliderWidth, itemWidth} from './CategoriesSlider.style';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = EStyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        height: '50%',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    bodyCategory: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCategory: {
        marginVertical: 10,
    },
    startBtn: {
        width: '40%',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: '#48B5E2',
    }
});

class CategoriesSlider extends Component {
    _renderItem = ({item}) => {
        return (<View style={{width: viewportWidth, height: '90%'}}>
            <Image
                source={{ uri: item.illustration }}
                style={styles.image}
            />
            <View style={styles.bodyCategory}>
                <Text style={styles.textCategory}>{item.subtitle}</Text>
                <Text style={styles.textCategory}>Category Score: {item.score}</Text>
                <TouchableOpacity style={styles.startBtn}>
                    <Text style={{ color: 'white' }}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }

    render() {
        return (<Carousel
            data={CATEGORIES}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />);
    }
}

export default CategoriesSlider;
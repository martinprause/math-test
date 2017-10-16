import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const sliderWidth = viewportWidth;
export const slideWidth = wp(75);
export const itemHorizontalMargin = wp(2);
export const itemWidth = viewportWidth;

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
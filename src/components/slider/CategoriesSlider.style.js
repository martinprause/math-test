import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const sliderWidth = viewportWidth;
export const itemWidth = viewportWidth;

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
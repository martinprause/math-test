import {connect} from 'react-redux';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CategoriesSlider from './slider/CategoriesSlider'
import EStyleSheet from 'react-native-extended-stylesheet';

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
    footer: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerBtn: {
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 50,
        width: 50
    },
    footerBtnImage: {
        height: 35,
        width: 35
    }

});

class Home extends Component {
    constructor(props) {
        super(props);
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

    renderCategoriesSlider = () =>
        <CategoriesSlider />

    render() {
        return (
            <View style={styles.wrapper}>
                {this.renderHeader()}
                {this.renderCategoriesSlider()}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Image
                            source={require('../assets/images/leaderboards.png')}
                            style={styles.footerBtnImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Image
                            source={require('../assets/images/home.png')}
                            style={styles.footerBtnImage}
                        />
                    </TouchableOpacity>
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
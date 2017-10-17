import {connect} from 'react-redux';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-native';
import {changeName, changeAvatar} from '../actions/user';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';

const styles = EStyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: 'flex-end'
    },
    btn: {
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50
    },
    btnImage: {
        height: 35,
        width: 35
    },
    avatar: {
        height: 200,
        width: 200,
    },
    avatarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%'
    },
    usernameInput: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1,
    },
    changeNameBtn: {
        width: '20%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#48B5E2',
    },
    changeNameBtnDisabled: {
        backgroundColor: '#5a5656',
    },
    body: {
        padding: 20,
    },
    twoColumnsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    leaderboards: {
        height: '25%',
        marginTop: 10,
    }
});

class AccountEdit extends Component {
    state = {
        userName: this.props.user.displayName,
        leaderboards: [
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2',
            'Silver League - Addition - Score 100 Level 2'
        ]
    };

    renderAvatar = () => {
        const {user} = this.props;
        if (user.scriptData.avatarUrl !== undefined) {
            return (
                <Image
                    source={{uri: user.scriptData.avatarUrl}}
                    style={styles.avatar}
                />
            );
        } else {
            return (
                <Image
                    source={require('../assets/images/avatar-default.png')}
                    style={styles.avatar}
                />
            );
        }
    }

    renderLeaderboards = () => {
        const { leaderboards } = this.state;
        return leaderboards.map(item => {
            return <Text>{item}</Text>
        });
    }

    render() {
        const {userName} = this.state;
        const {user} = this.props;
        const uniqueName = user.displayName === userName;

        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Link to={'/home'} style={styles.btn}>
                        <Image
                            source={require('../assets/images/back.png')}
                            style={styles.btnImage}
                        />
                    </Link>
                </View>
                <View style={styles.avatarWrapper}>
                    <TouchableOpacity onPress={() => this.props.changeAvatar()}>
                        {this.renderAvatar()}
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text>Name:</Text>
                    <View style={styles.twoColumnsWrapper}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.usernameInput}
                            onChangeText={(userName) => this.setState({userName})}
                            value={userName}
                        />
                        <TouchableOpacity
                            disabled={uniqueName}
                            style={[styles.changeNameBtn, uniqueName ? styles.changeNameBtnDisabled : null]}
                            onPress={() => this.props.changeName(userName)}
                        >
                            <Text style={{color: 'white'}}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Total score: {user.scriptData.totalScore}</Text>
                    <View style={styles.twoColumnsWrapper}>
                        <Text>Joker: {user.currencies.JOKE}</Text>
                        <TouchableOpacity style={styles.changeNameBtn}>
                            <Text style={{color: 'white'}}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Leaderboard :</Text>
                    <ScrollView style={styles.leaderboards}>
                        {this.renderLeaderboards()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => changeName(name)(dispatch),
        changeAvatar: () => changeAvatar()(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountEdit));
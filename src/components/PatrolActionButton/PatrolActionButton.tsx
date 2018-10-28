import * as React from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Image,
    Text,
    Animated,
    Easing,
    GestureResponderEvent
} from 'react-native';
import * as Styles from './Style';

interface IProps {
    icon: any;
    text: string;
    color: string;
    onPress(event: GestureResponderEvent, type: string): void;
}

interface IState {
    maxOpacity: number;
    scaleValue: Animated.Value;
    opacityValue: Animated.Value;
}

class Button extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);


        const maxOpacity: number = 0.12;

        this.state = {
            maxOpacity,
            scaleValue: new Animated.Value(0.01),
            opacityValue: new Animated.Value(maxOpacity),
        };

        this.renderRippleView = this.renderRippleView.bind(this);
        this.onPressedIn = this.onPressedIn.bind(this);
        this.onPressedOut = this.onPressedOut.bind(this);

    }

    onPressedIn = () => {
        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
        }).start();
    }

    onPressedOut = () => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
        }).start(() => {
            this.state.scaleValue.setValue(0.01);
            this.state.opacityValue.setValue(this.state.maxOpacity);
        });
    }

    renderRippleView = () => {
        const { scaleValue, opacityValue } = this.state;

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 120,
                    borderRadius: 6,
                    transform: [{ scale: scaleValue }],
                    opacity: opacityValue,
                    backgroundColor: 'black',
                }}
            />
        );
    }

    render() {
        const { icon, color, text, onPress } = this.props;

        return (
            <TouchableWithoutFeedback
                onPressIn={this.onPressedIn}
                onPressOut={this.onPressedOut}
                onPress={(event) => onPress(event, text)}>
                <View style={{ ...Styles.iconButton, backgroundColor: color }}>
                    {this.renderRippleView()}
                    <View style={Styles.iconHolder}>
                        <Image source={icon} style={Styles.iconImage} />
                        <Text style={Styles.iconText}>{text}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Button;

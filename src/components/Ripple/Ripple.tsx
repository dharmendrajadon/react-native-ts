import * as React from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';


interface IProps {
    icon: any;
    text: string;
}

interface IState {
    disabled: boolean;
    height: number;
    mounted: boolean;
    /*onRippleAnimation: Function;
    rippleCentered: boolean;
    rippleColor: string;
    rippleContainerBorderRadius: number;
    rippleDuration: number;
    rippleFades: boolean;
    rippleOpacity: number;
    rippleSequential: boolean;
    rippleSize: number;*/
    unique: number;
    ripples: number[];
    width: number;
}

class Ripple extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            disabled: false,
            mounted: false,
            height: 0,
            width: 0,
            unique: 0,
            ripples: []
        }
    }

    public componentDidMount() {
        this.setState({
            mounted: true
        });
    }

    public componentWillUnmount() {
        this.setState({
            mounted: false
        });
    }

}
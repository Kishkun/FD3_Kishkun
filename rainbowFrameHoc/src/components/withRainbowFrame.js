import React from 'react';

function withRainbowFrame(colors) {
    return function (Component) {
        return class extends React.Component {
            drawFrames() {
                return colors.reduce((acc, color, index) => {
                    return <Component key={index} color={color}>{acc}</Component>
                }, this.props.children)
            }
            render() {
                return this.drawFrames();
            }
        }
    };
}

export {withRainbowFrame};
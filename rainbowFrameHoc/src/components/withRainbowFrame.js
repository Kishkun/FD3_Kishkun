import React from 'react';

// function withRainbowFrame(colors) {
//     return function (Component) {
//         return class extends React.Component {
//             drawFrames() {
//                 return colors.reduce((acc, color, index) => {
//                     return <Component key={index} color={color}>{acc}</Component>
//                 }, this.props.children)
//             }
//             render() {
//                 return this.drawFrames();
//             }
//         }
//     };
// }

function withRainbowFrame(colors) {
    return function (Component) {
        return props => (
            colors.reduce((acc, color, index) => {
                return (
                    <div key={index} style={{border: `10px solid ${color}`, padding: '10px'}}>
                        {acc}
                    </div>
                )
            }, props.children)
        );
    };
}

export {withRainbowFrame};
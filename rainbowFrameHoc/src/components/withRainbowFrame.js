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
    return function(Component) {
        return props => (
            <div style={{border: `10px solid ${colors[0]}`, padding: '10px'}}>
                <div style={{border: `10px solid ${colors[1]}`, padding: '10px'}}>
                    <div style={{border: `10px solid ${colors[2]}`, padding: '10px'}}>
                        <div style={{border: `10px solid ${colors[3]}`, padding: '10px'}}>
                            <div style={{border: `10px solid ${colors[4]}`, padding: '10px'}}>
                                <div style={{border: `10px solid ${colors[5]}`, padding: '10px'}}>
                                    <div style={{border: `10px solid ${colors[6]}`, padding: '10px'}}>
                                        <Component {...props} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export {withRainbowFrame};
import React from 'react';
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
    renderSubmit(value) {
return value === 'english' ? 'Submit' : 'Voorleggen';
    }
    // static contextType = LanguageContext;
    renderButton(color) {
        return (
<button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {(value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
                </button>
        )
    }
    render() {
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <ColorContext.Consumer>
            {(color) => this.renderButton(color) }
        
                </ColorContext.Consumer>
        )
    }
}

export default Button;
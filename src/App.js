//Import React: wat doet dat eigenlijk?
import React from 'react';

// Deze import koppelt ons CSS bestand aan App.js
import './App.css';

// Class component met een constructor()-functie. Deze zorgt ervoor dat properties doorgegeven kunnen worden aan de parent-class: React.Component. En die zorgt er dan weer voor dat we via this.props bij onze properties kunnen.
class App extends React.Component {
    constructor(props) {
        // super hoort denk ik standaard bij een class component?
        super(props);

        // Op het this keyword zijn alle variabelen en methoden van de class te vinden. Hieronder is dat de state-variabele. Hier staat: state = aan.
        this.state = {
            isLightOn: true
        };

        // We binden de handle-methode aan this door middel van bind (https://gist.github.com/fongandrew/f28245920a41788e084d77877e65f22f)
        this.handleClick = this.handleClick.bind(this);
    }

    // Deze functie bepaalt de staat: knop aan of uit. Hoe werkt de : ! precies?
    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    // Alles wat gereturned wordt uit de render-functie, wordt weergegeven op de pagina (gerendered)
    render() {
        return (
            <button
                type="button"
                // De handle-methode wordt meegegeven via de onClick-property. Wordt er geklikt op de button, dan gaat de functie handleClick af.
                onClick={this.handleClick}
            >
                {/*State variable wordt aangesproken*/}
                {/*Conditionele rendering: conditie (isLightOn?) --> waar geeft 'AAN' --> niet waar geeft 'UIT'*/}
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}

export default App;

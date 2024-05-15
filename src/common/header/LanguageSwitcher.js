import React from 'react';

export default class LanguageSwitcher extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($("#polyglot-language-options").length) {
            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
              effect: 'slide',
              animSpeed: 500,
              testMode: true,
              onChange: function (evt) {
                alert("The selected language is: " + evt.selectedItem);
              }
        
            });
        }
          
    }
    render(){
        return (
            <>
                <div class="language-switcher">
                    <div id="polyglotLanguageSwitcher">
                        <form action="#">
                            <select id="polyglot-language-options">
                                <option id="en" value="en" selected>England</option>
                                <option id="fr" value="fr">France</option>
                                <option id="de" value="de">Germany</option>
                                <option id="it" value="it">Italy</option>
                                <option id="es" value="es">Span</option>
                            </select>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
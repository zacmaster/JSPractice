import React, { Component } from 'react';
import Servicio from './servicio'

class App extends Component{
    render(){
        new Servicio()


        return(
            <div>
                App works!
            </div>
        )
    }
}

export default App
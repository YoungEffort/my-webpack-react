import React, {Component} from 'react';
import Table from './components/Table/table.jsx';
 
class App extends Component {
    render() {
        // eslint-disable-next-line
        const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

        return (
            <div className="App">
                <Table characterData={characters}/>
            </div>
        );
    }
}
 
export default App;
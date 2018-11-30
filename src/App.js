import React, {Component} from 'react';
import Table from './components/Table/table.jsx';
import Form from './components/Form/form.jsx';

class App extends Component {
    state = {
        characters: [],
        data:[]
    };
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }
    removeCharacter = index => {
        const { characters } = this.state;
     
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
    render() {
        // eslint-disable-next-line
        const { characters,data } = this.state;
        console.log(this.state.data)
        console.log(data)
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });
        return (
            <div className="App">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
                <ul>{result}</ul>;
            </div>
        );
    }
}

export default App;
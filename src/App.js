import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.scss';
import NOTES from './Store/data.json';
import NavBar from './Components/NavBar/NavBar'
import IndexPage from "./Pages/index";
import NewPage from "./Pages/new";
import EditPage from "./Pages/edit"

class App extends Component {

   state = {notes: NOTES, searchField: ''};

    handleAdd = (note) => {
        const notes = [...this.state.notes, note];
        this.setState({notes});
    };

    handleDelete = (id) => {
        const notes = this.state.notes.filter(note => {
            return note.id !== id
        });
        this.setState({notes});
    };

    handleSearch = (e) => {

        this.setState({searchField: e.target.value.toLowerCase()});

        const searchText = e.target.value.toLowerCase();

        const notes = NOTES.filter(n => {
            const searchString = n.tags.filter(t=> t.toLowerCase().indexOf(searchText) !== -1);
            return searchString.length;
        });
        this.setState({notes:notes, searchfield: searchText});
    };

    filterById = (id)=>{
        return this.state.notes.filter(note => note.id === +id)[0];
    };

    changeTitle=(editedState, id)=>{
        let noteEdit = this.state.notes.filter( n => n.id === +id );
        let not = this.state.notes.filter( n => n.id !== +id);

        this.setState({
            notes: [ ...not,{...noteEdit[0], ...editedState}]
        })
    };

    render() {

        return (
            <BrowserRouter>
                <div className="app">
                    <NavBar/>
                    <div className="app-content">
                        <Route exact path='/' component={(props) =>
                            <IndexPage {...props}  onSearch={this.handleSearch} searchText={this.state.searchfield} onDelete={this.handleDelete} notes={this.state.notes}/>}
                        />
                        <Route exact path='/add' component={(props) =>
                            <NewPage {...props} handleAdd={this.handleAdd}/>}
                        />
                        <Route exact path='/edit/:id' component={(props) =>
                            <EditPage {...props} changeTitle={this.changeTitle} notes={this.filterById (props.match.params.id)}/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

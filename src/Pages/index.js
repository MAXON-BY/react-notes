import React, {Component} from 'react';
import NoteList from "../Components/NoteList/NoteList";
import './IndexPage.scss'
import {Link} from "react-router-dom";
import SearchBar from "../Components/SearchBar/SearchBar";

class IndexPage extends Component {
    render() {

        const {notes, onDelete, onSearch, searchText} = this.props;

        return (
            <div className="note-wrap">
                <div className="note-wrap-notes">
                    <h1>My Notes</h1>

                    <SearchBar  onSearch={onSearch} searchfield={searchText}/>
                </div>

                {notes.length === 0
                    ? <p>You have no any Notes. Please, add new note!</p>
                    : <NoteList notes={notes} searchText={searchText} onDelete={onDelete}/>
                }

                <div className="note-wrap-btn">
                    <Link className="btn" to="/add"> + Add Note</Link>
                </div>
            </div>
        );
    }
}

export default IndexPage;
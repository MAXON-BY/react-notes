import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './NoteList.scss'

class NoteList extends Component {
    render() {

        const notes = Object.values(this.props.notes);
        const {onDelete} = this.props;

        const renderNotes = notes.map(n =>
            <div key={n.id} className="note-list">
                <div className="note-list-block">
                    <div className="note-list-descr">
                        <h2>{n.title}</h2>
                        <p>{n.date}</p>
                    </div>
                    <div className="note-list-content">
                        <div dangerouslySetInnerHTML={{__html: n.text}}/>
                        <p className="note-list-tags">{ n.tags !== null ? n.tags.join(' ') : `#notags`}</p>
                    </div>
                </div>
                <div className="note-list-btn">
                    <Link to={`/edit/${n.id}`}>
                        <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button onClick={()=> onDelete(n.id)} className="btn btn-delete">Delete</button>
                </div>
            </div>
        );

        return (
            <div>
                {/*<p dangerouslySetInnerHTML={{__html: var1}}/>*/}
                {renderNotes}
            </div>
        );
    }
}

export default NoteList;
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class EditPage extends Component {

    state= {
        id: this.props.notes && this.props.notes.id,
        title:  this.props.notes  && this.props.notes.title,
        text:this.props.notes  && this.props.notes.text,
        date: this.props.notes && this.props.notes.date,
        tags: this.props.notes && this.props.notes.tags
    };

    handleChange = (e) =>  {

        let text = e.target.value;
        // let noTag = text.replace(/(<i>|<\/i>)/g, "");
        let textTag = text.match(/#[\w]+/ig)

        this.setState({
            id: +this.props.match.params.id,
            [e.target.name]:e.target.value,
            // text: noTag,
            date: new Date().toLocaleString(),
            tags: textTag
        });
    };

    onSaveClick = (e) =>{
        e.preventDefault();

        let text = this.state.text;
        let regText = text.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<i>$2</i>');

        this.props.changeTitle({...this.state, text: regText},  +this.props.match.params.id);
        this.props.history.replace(`/`);
    };

    render() {
        return (
            <div>
                <div className="note-form">
                    <h1>Edit Note:</h1>
                    <form onSubmit={this.onSaveClick}>
                        <div className="note-form-field">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                required="required"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="note-form-field note-form-field-text">
                            <label>Text</label>
                            <textarea
                                name="text"
                                value={this.state.text.replace(/(<i>|<\/i>)/g, "")}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="note-form-buttons">
                            <button className="btn">Save</button>
                            <Link to="/">Cancel</Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default EditPage;
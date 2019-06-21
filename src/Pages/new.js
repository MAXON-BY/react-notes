import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './newPage.scss'

class NewPage extends Component {

    state = {
        id: null,
        title: null,
        text: null,
        tags: "",
        date: null
    };

    handleChange = (e) =>{
        let text = e.target.value;
        let textTag = text.match(/#[\w]+/ig);
        let regText = text.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<i>$2</i>');
        let divText = `${regText}`;

        this.setState({
            id: Math.floor(Math.random() * 1000) + 1,
            [e.target.name]:e.target.value,
            text: divText,
            date: new Date().toLocaleString(),
            tags: textTag
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.props.history.replace(`/`);
    };

    render() {

        return (
            <div className="note-form">
                <h1>New Note</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="note-form-field">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            required="required"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="note-form-field note-form-field-text">
                        <label>Text</label>
                        <textarea
                            name="text"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="note-form-buttons">
                        <button className="btn">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>

            </div>

        );
    }
}

export default NewPage;
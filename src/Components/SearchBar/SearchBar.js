import React, {Component} from 'react';

class SearchBar extends Component {
    render() {

        const{onSearch, searchfield} =this.props;

        return (
            <input
                className="note-form-field input-search"
                type="text"
                value={searchfield}
                placeholder="Search note by #tag"
                onChange={onSearch}
                autoFocus={true}
            />
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';
import Table from "./common/table"

class ChatHistory extends Component {

    columns = [{ path: 'host.content', label: 'Sort' }, { path: 'genre.name', label: 'Conversations' }, { key: "delete", content: movie => <button onClick={() => this.props.onDelete(movie._id)} className="btn btn-sm btn-outline-danger"> x </button> }]

    render() {
        const { chats, sortColumn, onSort } = this.props
        return (
            <Table
                columns={this.columns}
                data={chats}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}

export default ChatHistory;
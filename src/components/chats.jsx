import React, { Component } from "react";
import { getChats } from "../services/fakeChatService";

import NavBar from "./common/navbar";

import ChatHistory from "./chatHistory";
import Form from "./common/form"
import Display from "./common/display"

// import Pagination from "./common/pagination";

import { paginate } from "../utils/paginate";
import _ from 'lodash';


class Chats extends Component {
  state = {
    chats: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {


    this.setState({
      chats: getChats()

    })
  }

  getPageData = () => {
    const { pageSize, currentPage,  chats: allChats, sortColumn } = this.state;


    const sorted = _.orderBy(allChats, [sortColumn.path], [sortColumn.order])

    const chats = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, data: chats }
  }

  handleDelete = (id) => {
    let newChatList = this.state.chats.filter((movie) => movie._id !== id);
    this.setState({
      chats: newChatList,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn
    })
  }

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: chats } = this.getPageData();


    return (
      <React.Fragment>
        <NavBar />
        <div className="row">
          <div className="col-md-5 m-4">
            <ChatHistory
              chats={chats}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
  
          </div>
          <div className="col m-4">

            <div className="row">
              <div className="col m-4">        
                <Form
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div >
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chats;

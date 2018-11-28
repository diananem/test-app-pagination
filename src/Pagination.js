import React, { Component } from 'react';
import './Pagination.css';

const LIST = ["a", "b", "c", "d", "e", "f", "g", "k", "l",];
const ITEMS_PER_PAGE = 3;

class Pagination extends Component {
  state = {
    activePage: 1
  }

  setActivePage = (page) => () => {
    console.log(page);
    this.setState({
      activePage: page
    })
  }
  render() {
    const lastItemIndex = this.state.activePage * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    const currentItems = LIST.slice(firstItemIndex, lastItemIndex);
    const rangeOfPages = Math.ceil(LIST.length / ITEMS_PER_PAGE);
    const pageNumbers = [];
    for (let i = 1; i <= rangeOfPages; i++) {
      pageNumbers.push(<li
        className="page-number"
        key={i}
        onClick={this.setActivePage(i)}
      >
        {i}
      </li>)
    }
    return (
      <div className="App" >
        <ul className="list">
          {currentItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ul className="pages">
          {pageNumbers}
        </ul>
      </div>
    );
  }
}

export default Pagination;

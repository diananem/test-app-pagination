import React, { Component } from 'react';
import { Pagination } from 'antd';
import { List, Avatar } from 'antd';
import './Pagination.css';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
  {
    title: 'Ant Design Title 9',
  },
  {
    title: 'Ant Design Title 10',
  },
];
const ITEMS_PER_PAGE = 3;

class PaginationApp extends Component {
  state = {
    activePage: 1
  }

  setActivePage = (page) => {
    console.log(page);
    this.setState({
      activePage: page
    })
  }
  render() {
    const lastItemIndex = this.state.activePage * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    const currentItems = data.slice(firstItemIndex, lastItemIndex);

    return (
      <div className="App" >
        <List
          itemLayout="horizontal"
          dataSource={currentItems}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />

        <Pagination current={this.state.activePage} pageSize={ITEMS_PER_PAGE} total={data.length} onChange={this.setActivePage} />
      </div>
    );
  }
}

export default PaginationApp;

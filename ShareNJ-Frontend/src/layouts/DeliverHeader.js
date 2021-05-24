import React from 'react';
import { connect, history } from 'umi';
import { Menu } from 'antd';
import {
  HomeOutlined,
  OrderedListOutlined,
  EditOutlined,
  FileAddOutlined,
  LoginOutlined
} from '@ant-design/icons';

class DeliverHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // handler
  handleClick = e => {
    if (e.key === '/loginPage') history.push('/');
    if (history.location.pathname !== e.key) history.push('/deliver' + e.key);
  };


  render() {
    return <div>
      <Menu mode="horizontal" theme='light' onClick={this.handleClick} selectedKeys={history.location.pathname}>
        <Menu.Item key="/deliverHome">
          <HomeOutlined />
          配送员信息
        </Menu.Item>
        <Menu.Item key="/myAllDeliverTask">
          <OrderedListOutlined />
          我的全部配送任务
        </Menu.Item>
        <Menu.Item key="/loginPage" style={{float: 'right'}}>
          <LoginOutlined />
          {this.props.username}配送员
        </Menu.Item>
      </Menu>
      <div>
        {this.props.children}
      </div>
    </div>;
  }
}

function mapStateToProps({ loginModel }) {
  const { username } = loginModel;
  return { username };
}

export default connect(mapStateToProps)(DeliverHeader);

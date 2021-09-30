import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ReconciliationOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import withBase from '../dependencies/WithBase';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

import classNames from 'classnames/bind';
import styles from '../styles/index.scss';
const cx = classNames.bind(styles);

@withRouter
@withBase
export default class Base extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	};

	render() {
		const { __POWERED_BY_QIANKUN__ } = window;
		const { collapsed } = this.state;
		const { selectKeys, children, menuComponents, breadcrumbs } = this.props;

		return __POWERED_BY_QIANKUN__ ? (
			<Layout className={cx('microAppLayout')}>{children}</Layout>
		) : (
			<Layout className={cx('layout')}>
				<Sider className={'sider'} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
					<div className={cx('logo')} />
					<Menu theme="dark" defaultSelectedKeys={[selectKeys]} mode="inline">
						{menuComponents}
					</Menu>
				</Sider>
				<div className={cx('main')}>
					<div className={cx('info-bar')}></div>
					<Breadcrumb className={cx('subInfo-bar')}>{breadcrumbs}</Breadcrumb>
					<Content className={cx('content')}>
						{children}
						<div id="micro_app" />
					</Content>
				</div>
			</Layout>
		);
	}
}

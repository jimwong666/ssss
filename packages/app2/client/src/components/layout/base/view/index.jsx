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
			<Layout style={{ minHeight: '100vh' }}>
				<Layout className={cx('site-layout')}>
					<Content className={cx('main-content')} style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbs}</Breadcrumb>
						<div className={cx('site-layout-background')} style={{ padding: 24 }}>
							{children}
						</div>
					</Content>
				</Layout>
			</Layout>
		) : (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
					<div className={cx('logo')} />
					<Menu theme="dark" defaultSelectedKeys={[selectKeys]} mode="inline">
						{menuComponents}
					</Menu>
				</Sider>
				<Layout className={cx('site-layout')}>
					<Content className={cx('main-content')} style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbs}</Breadcrumb>
						<div className={cx('site-layout-background')} style={{ padding: 24 }}>
							{children}
						</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { HomeOutlined, EllipsisOutlined } from '@ant-design/icons';

import classNames from 'classnames/bind';
import styles from '../styles/index.scss';

const cx = classNames.bind(styles);

const { Content, Sider } = Layout;

export default class Main extends React.Component {
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
		const { active, breadcrumbs, text } = this.props;

		return __POWERED_BY_QIANKUN__ ? (
			<Layout style={{ minHeight: '100vh' }}>
				<Layout className={cx('site-layout')}>
					<Content className={cx('mian-content')} style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							{breadcrumbs.map((item, index) => (
								<Breadcrumb.Item key={item}>
									{index}-{item}
								</Breadcrumb.Item>
							))}
						</Breadcrumb>
						<div className={cx('site-layout-background')} style={{ padding: 24 }}>
							{text}
						</div>
					</Content>
				</Layout>
			</Layout>
		) : (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
					<div className={cx('logo')} />
					<Menu theme="dark" defaultSelectedKeys={[active]} mode="inline">
						<Menu.Item key="1" icon={<HomeOutlined />}>
							<Link to="/">首页</Link>
						</Menu.Item>
						<Menu.Item key="6" icon={<EllipsisOutlined />}>
							<Link to="/about">关于</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className={cx('site-layout')}>
					<Content className={cx('mian-content')} style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							{breadcrumbs.map((item, index) => (
								<Breadcrumb.Item key={item}>
									{index}-{item}
								</Breadcrumb.Item>
							))}
						</Breadcrumb>
						<div className={cx('site-layout-background')} style={{ padding: 24 }}>
							<div>这里是app2</div>
							{text}
						</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

import React from 'react';
import { Breadcrumb, Menu, message } from 'antd';
const { SubMenu } = Menu;
import menuData from './menuData';
import { Link } from 'react-router-dom';

export default function withBase(WrappedComponent) {
	return class WithBase extends React.Component {
		constructor(props) {
			super(props);
			this.menuComponents = [];
		}

		componentDidMount() {
			this.getMenu(menuData, this.menuComponents);
		}

		getMenu = (originData, targetComponents) => {
			for (let index in originData) {
				if (!!originData[index].path) {
					targetComponents.push(
						<Menu.Item key={originData[index].menuKey} icon={originData[index].icon}>
							<Link to={originData[index].path}>{originData[index].text}</Link>
						</Menu.Item>,
					);
				} else if (
					!!originData[index].subMenuGroup &&
					Object.prototype.toString.call(originData[index].subMenuGroup) === '[object Array]'
				) {
					targetComponents.push(
						<SubMenu key={originData[index].subMenuKey} icon={originData[index].icon} title={originData[index].text}>
							{originData[index].subMenuGroup.map((_item) => (
								<Menu.Item key={_item.menuKey} icon={_item.icon}>
									<Link to={_item.path}>{_item.text}</Link>
								</Menu.Item>
							))}
						</SubMenu>,
					);
				} else {
					message.error('菜单出错啦！').then((r) => null);
				}
			}
		};

		getBreadcrumb = (arr) => {
			return arr.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>);
		};

		render() {
			const { breadcrumbArr } = this.props;

			return (
				<WrappedComponent
					{...this.props}
					menuComponents={this.menuComponents}
					breadcrumbs={this.getBreadcrumb(breadcrumbArr)}
				/>
			);
		}
	};
}

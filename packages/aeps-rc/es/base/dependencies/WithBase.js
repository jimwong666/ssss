function _typeof(obj) {
	'@babel/helpers - typeof';
	if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
				? 'symbol'
				: typeof obj;
		};
	}
	return _typeof(obj);
}

import 'antd/lib/breadcrumb/style';
import _Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';

function _extends() {
	_extends =
		Object.assign ||
		function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
	return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function');
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, writable: true, configurable: true },
	});
	if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
	_setPrototypeOf =
		Object.setPrototypeOf ||
		function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
	return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
	var hasNativeReflectConstruct = _isNativeReflectConstruct();
	return function _createSuperInternal() {
		var Super = _getPrototypeOf(Derived),
			result;
		if (hasNativeReflectConstruct) {
			var NewTarget = _getPrototypeOf(this).constructor;
			result = Reflect.construct(Super, arguments, NewTarget);
		} else {
			result = Super.apply(this, arguments);
		}
		return _possibleConstructorReturn(this, result);
	};
}

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
		return call;
	}
	return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return self;
}

function _isNativeReflectConstruct() {
	if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
	if (Reflect.construct.sham) return false;
	if (typeof Proxy === 'function') return true;
	try {
		Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
		return true;
	} catch (e) {
		return false;
	}
}

function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
		  };
	return _getPrototypeOf(o);
}

import React from 'react';
var SubMenu = _Menu.SubMenu;
import menuData from './menuData';
import { Link } from 'react-router-dom';
export default function withBase(WrappedComponent) {
	return /*#__PURE__*/ (function (_React$Component) {
		_inherits(WithBase, _React$Component);

		var _super = _createSuper(WithBase);

		function WithBase(props) {
			var _this;

			_classCallCheck(this, WithBase);

			_this = _super.call(this, props);

			_this.getMenu = function (originData, targetComponents) {
				for (var index in originData) {
					if (!!originData[index].path) {
						targetComponents.push(
							/*#__PURE__*/ React.createElement(
								_Menu.Item,
								{
									key: originData[index].menuKey,
									icon: originData[index].icon,
								},
								/*#__PURE__*/ React.createElement(
									Link,
									{
										to: originData[index].path,
									},
									originData[index].text,
								),
							),
						);
					} else if (
						!!originData[index].subMenuGroup &&
						Object.prototype.toString.call(originData[index].subMenuGroup) === '[object Array]'
					) {
						targetComponents.push(
							/*#__PURE__*/ React.createElement(
								SubMenu,
								{
									key: originData[index].subMenuKey,
									icon: originData[index].icon,
									title: originData[index].text,
								},
								originData[index].subMenuGroup.map(function (_item) {
									return /*#__PURE__*/ React.createElement(
										_Menu.Item,
										{
											key: _item.menuKey,
											icon: _item.icon,
										},
										/*#__PURE__*/ React.createElement(
											Link,
											{
												to: _item.path,
											},
											_item.text,
										),
									);
								}),
							),
						);
					} else {
						_message.error('菜单出错啦！').then(function (r) {
							return null;
						});
					}
				}
			};

			_this.getBreadcrumb = function (arr) {
				return arr.map(function (item, index) {
					return /*#__PURE__*/ React.createElement(
						_Breadcrumb.Item,
						{
							key: index,
						},
						item,
					);
				});
			};

			_this.menuComponents = [];
			return _this;
		}

		_createClass(WithBase, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.getMenu(menuData, this.menuComponents);
				},
			},
			{
				key: 'render',
				value: function render() {
					var breadcrumbArr = this.props.breadcrumbArr;
					return /*#__PURE__*/ React.createElement(
						WrappedComponent,
						_extends({}, this.props, {
							menuComponents: this.menuComponents,
							breadcrumbs: this.getBreadcrumb(breadcrumbArr),
						}),
					);
				},
			},
		]);

		return WithBase;
	})(React.Component);
}

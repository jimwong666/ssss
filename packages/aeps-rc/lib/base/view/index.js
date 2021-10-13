'use strict';

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

Object.defineProperty(exports, '__esModule', {
	value: true,
});
exports.default = void 0;

require('antd/lib/breadcrumb/style');

var _breadcrumb = _interopRequireDefault(require('antd/lib/breadcrumb'));

require('antd/lib/menu/style');

var _menu = _interopRequireDefault(require('antd/lib/menu'));

require('antd/lib/layout/style');

var _layout = _interopRequireDefault(require('antd/lib/layout'));

var _react = _interopRequireDefault(require('react'));

var _reactRouterDom = require('react-router-dom');

var _WithBase = _interopRequireDefault(require('../dependencies/WithBase'));

var _bind = _interopRequireDefault(require('classnames/bind'));

var _index = _interopRequireDefault(require('../styles/index.scss'));

var _class;

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
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

var Content = _layout.default.Content,
	Sider = _layout.default.Sider;

var cx = _bind.default.bind(_index.default);

var Base =
	(0, _reactRouterDom.withRouter)(
		(_class =
			(0, _WithBase.default)(
				(_class = /*#__PURE__*/ (function (_React$Component) {
					_inherits(Base, _React$Component);

					var _super = _createSuper(Base);

					function Base(props) {
						var _this;

						_classCallCheck(this, Base);

						_this = _super.call(this, props);

						_this.onCollapse = function (collapsed) {
							_this.setState({
								collapsed: collapsed,
							});
						};

						_this.state = {
							collapsed: true,
						};
						return _this;
					}

					_createClass(Base, [
						{
							key: 'render',
							value: function render() {
								var _window = window,
									__POWERED_BY_QIANKUN__ = _window.__POWERED_BY_QIANKUN__;
								var collapsed = this.state.collapsed;
								var _this$props = this.props,
									selectKeys = _this$props.selectKeys,
									children = _this$props.children,
									menuComponents = _this$props.menuComponents,
									breadcrumbs = _this$props.breadcrumbs;
								return __POWERED_BY_QIANKUN__
									? /*#__PURE__*/ _react.default.createElement(
											_layout.default,
											{
												className: cx('microAppLayout'),
											},
											children,
									  )
									: /*#__PURE__*/ _react.default.createElement(
											_layout.default,
											{
												className: cx('layout'),
											},
											/*#__PURE__*/ _react.default.createElement(
												Sider,
												{
													className: 'sider',
													collapsible: true,
													collapsed: collapsed,
													onCollapse: this.onCollapse,
												},
												/*#__PURE__*/ _react.default.createElement('div', {
													className: cx('logo'),
												}),
												/*#__PURE__*/ _react.default.createElement(
													_menu.default,
													{
														theme: 'dark',
														defaultSelectedKeys: [selectKeys],
														mode: 'inline',
													},
													menuComponents,
												),
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: cx('main'),
												},
												/*#__PURE__*/ _react.default.createElement(
													'div',
													{
														className: cx('info-bar'),
													},
													'\u8FD9\u91CC\u662Faeps-rc!',
												),
												/*#__PURE__*/ _react.default.createElement(
													_breadcrumb.default,
													{
														className: cx('subInfo-bar'),
													},
													breadcrumbs,
												),
												/*#__PURE__*/ _react.default.createElement(
													Content,
													{
														className: cx('content'),
													},
													children,
													/*#__PURE__*/ _react.default.createElement('div', {
														id: 'micro_app',
													}),
												),
											),
									  );
							},
						},
					]);

					return Base;
				})(_react.default.Component)),
			) || _class),
	) || _class;

exports.default = Base;

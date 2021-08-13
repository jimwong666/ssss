/**
 *
 * 判断链接是否需要登录
 */

const Session = require('../session');
const Constants = require('../constants');
const tools = require('../utils/tools');

// 已登录，访问 /login，直接到首页
const loginUrlReg = /^\/(login)/;

module.exports = {
	filter(req, res, next) {
		if (req.locals.app.skipLoginFilter) {
			// 跳过本次中间件
			next();
			return;
		}

		const matchWhitelist = tools.MatchSome(req.url, Constants.LOGIN_WHITE_LIST);
		const session = Session.get(req, res);
		const logged = session && session.userIdEnc;
		const { host } = req.headers;

		if (process.env.NODE_ENV === 'production' && host.indexOf(res.locals.app.domainUrl) === -1) {
			// 外部调用
			next();
		} else {
			// 内部调用
			req.locals.app.skipCERFFilter = true;

			if (logged) {
				// 已登录
				if (loginUrlReg.test(req.url)) {
					res.redirect('/');
				} else {
					next();
				}
				// ↓↓↓↓↓ 未登录
			} else if (matchWhitelist) {
				next();
			} else if (req.xhr) {
				// 异步请求
				next({
					retCode: 401,
					stack: 'unauthorized',
					message: '未授权！',
				});
			} else {
				const fromPos = req.url.indexOf('?');
				if (fromPos === -1) {
					const redirectUrl = req.url === '/' ? '/login' : `/login?from=${encodeURIComponent(req.url)}`;
					res.redirect(redirectUrl);
				} else {
					res.redirect(`/login?from=${encodeURIComponent(req.url.slice(0, fromPos))}&${req.url.slice(fromPos + 1)}`);
				}
			}
		}
	},
};

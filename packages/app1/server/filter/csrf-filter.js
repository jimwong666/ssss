/**
 *
 * 判断链接是否通过Token校验
 */

const Session = require('../session');
const Constants = require('../constants');
const tools = require('../utils/tools');

module.exports = {
	filter(req, res, next) {
		if (req.locals.app.skipCERFFilter) {
			// 本站请求，跳过csrf
			next();
		}

		const matchWhitelist = tools.MatchSome(req.url, Constants.CSRF_WHITE_LIST);
		const session = Session.get(req, res);
		const xToken =
			req.header('x-token') || req.body['x-token'] || req.query['x-token'];

		if (
			matchWhitelist &&
			req.method === 'GET' &&
			xToken &&
			decodeURIComponent(xToken) === session.xToken
		) {
			// 匹配csrf白名单 并且 请求是get 并且 xToken存在且与session里面的相等
			next();
		} else {
			next({
				retCode: 401,
				stack: 'unauthorized',
				message: '未授权！',
			});
		}
	},
};

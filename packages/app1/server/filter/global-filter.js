const extend = require('extend');
const PIDFactory = require('../utils/PIDFactory');
const conf = require('../utils/tools').appConfig;

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
	filter(req, res, next) {
		if (!req.locals) {
			req.locals = {};
		}
		extend(req.locals, {
			app: {
				skipLoginFilter: false,
				skipCERFFilter: false,
			},
		});

		// 获取真实IP
		req.realIp = (function () {
			const forwarded = req.header('x-forwarded-for');
			let ip = '';

			if (forwarded) {
				[ip] = forwarded.split(',');
			} else {
				ip = req.connection.remoteAddress;
			}
			return ip;
		})();

		req.pid = PIDFactory.createPID(req, res);

		if (!res.locals) {
			res.locals = {};
		}
		extend(res.locals, {
			query: req.query,
			app: {
				devMode: isDevMode,
				staticPath: isDevMode ? conf.cdn : '/',
				domainUrl: conf.domainUrl,
				version: conf.version,
			},
		});

		next();
	},
};

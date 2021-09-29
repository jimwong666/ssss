import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoCards from '@components/business/infoCards';
import Cards from '@components/widgets/cards';
import classNames from 'classnames/bind';
// import { xml } from 'cheerio';
import styles from '../styles/index.scss';
import { fetchTestAction } from '../actions';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
	customTestFetch: state.getIn(['homeReducer', 'customTestFetch']),
});

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(
		{
			fetchTest: fetchTestAction,
		},
		dispatch,
	),
});

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fatherNumber: 1,
		};
		this.test = this.test.bind(this);
	}

	test(txt) {
		const { fetchTest } = this.props;
		fetchTest(txt);
	}

	render() {
		const { customTestFetch } = this.props;
		let { fatherNumber } = this.state;
		return (
			<div className={cx('home-content')}>
				<div className={cx('info-list')}>
					<div>{customTestFetch.data}</div>
					<div>{String(customTestFetch.status)}</div>
					<div>txt: {customTestFetch.txt}</div>
					<div>{fatherNumber}</div>
					<button
						type="button"
						onClick={() =>
							this.setState(
								(state, props) => {
									console.log(state, props);
									return {
										fatherNumber: ++fatherNumber,
									};
								},
								() => {
									console.log('setState完成！');
									this.test({
										txt: fatherNumber + 1,
									});
								},
							)
						}
					>
						TEST
					</button>
					<Divider orientation="left" style={{ color: '#999' }}>
						2020-04-27
					</Divider>
					<Cards type="article" href="https://www.baidu.com" text="Redux源码解析" time="9:45" operating={0} />
					<Divider orientation="left" style={{ color: '#999' }}>
						2020-04-24
					</Divider>
					<Cards
						type="message"
						href="https://www.baidu.com"
						subUserId="666"
						subUserName="666"
						subText="这题应该这么解...！"
						userId="9527"
						userName="9527"
						text="你叫什么名字？"
						time="16:48"
						operating={1}
					/>
					<Divider orientation="left" style={{ color: '#999' }}>
						2020-04-21
					</Divider>
					<Cards
						type="comment"
						href="https://www.baidu.com"
						userId="9527"
						userName="9527"
						title="JS源码赏析"
						text="写的好啊！"
						time="16:48"
						operating={2}
					/>
				</div>
				<div className={cx('info-cards')}>
					<InfoCards />
				</div>
			</div>
		);
	}
}

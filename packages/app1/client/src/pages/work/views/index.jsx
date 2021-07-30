import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { asyncFetchPreData, asyncFetchPreData2 } from '../actions';
import { asyncFetchPreDataAction } from '../actions';
// import classNames from 'classnames/bind';
// import styles from '../styles/index.scss';
// const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
	preData: state.getIn(['workReducer', 'preData']),
	// preData2: state.getIn(['workReducer', 'preData2']),
});

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(
		{
			asyncFetchPreData: asyncFetchPreDataAction,
			// asyncFetchPreData2
		},
		dispatch,
	),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Work extends React.Component {
	componentDidMount() {
		const { asyncFetchPreData } = this.props;
		asyncFetchPreData();
		// this.props.asyncFetchPreData2();
	}

	render() {
		// const { preData, preData2 } = this.props;
		const { preData } = this.props;
		// console.log(preData2.toJS());
		return (
			<ul>
				{preData.get('data')?.map((item) => {
					return (
						<li key={item.get('id')}>
							<span>{item.get('name')}</span>
							<img src={item.get('imgUrl')} alt="img" />
						</li>
					);
				})}
			</ul>
		);
	}
}

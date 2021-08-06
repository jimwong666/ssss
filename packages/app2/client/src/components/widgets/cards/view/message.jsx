import React from 'react';
import { Card, Avatar, Divider } from 'antd';
import { CommentOutlined, MessageOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../styles/index.scss';

const cx = classNames.bind(styles);
const { Meta } = Card;

export default function MessageCards(props) {
	const { href, subText, subUserName, userName, text, operating, time } = props;
	return (
		<a href={href} className={cx('link')}>
			<Card
				hoverable
				size="small"
				className={cx('home-item', 'home-message-item')}
				title={
					<div className={cx('message-item-title')}>
						<CommentOutlined className={cx('message-name-icon')} />
						<span className={cx('message-name')}>留言板</span>
					</div>
				}
				type="inner"
			>
				<Card size="small" className={cx('home-item', 'home-message-item-sub')}>
					<Meta
						avatar={
							<Avatar alt="头像" size={20} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={<span className={cx('message-userName-sub')}>{subUserName}</span>}
						description={
							<>
								<span className={cx('home-item-icon-sub')}>
									<MessageOutlined />：
								</span>
								<div className={cx('home-item-content-sub')}>
									<div className={cx('home-item-title-sub')}>{subText}</div>
								</div>
							</>
						}
					/>
				</Card>
				<Divider orientation="left" style={{ color: '#bbb', fontSize: '12px' }}>
					回复
				</Divider>
				<Meta
					avatar={<Avatar alt="头像" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title={<span className={cx('message-userName')}>{userName}</span>}
					description={
						<>
							<span className={cx('home-item-icon')}>
								<MessageOutlined />：
							</span>
							<div className={cx('home-item-content')}>
								<span className={cx('home-item-title')}>
									<p>{text}</p>
								</span>
								<span className={cx('home-item-time')}>
									{operating} {time}
								</span>
							</div>
						</>
					}
				/>
			</Card>
		</a>
	);
}

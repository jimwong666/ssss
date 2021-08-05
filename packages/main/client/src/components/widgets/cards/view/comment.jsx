import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, FileTextOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../styles/index.scss';

const cx = classNames.bind(styles);
const { Meta } = Card;

export default function CommentCards(props) {
	const { href, title, userName, text, operating, time } = props;
	return (
		<a href={href} className={cx('link')}>
			<Card
				hoverable
				size="small"
				className={cx('home-item', 'home-comment-item')}
				title={
					<div className={cx('comment-item-title')}>
						<FileTextOutlined className={cx('comment-name-icon')} />
						<span className={cx('comment-name')}>{title}</span>
						<span className={cx('item-type')}>文章评论</span>
					</div>
				}
				type="inner"
			>
				<Meta
					avatar={
						<Avatar
							alt="头像"
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						/>
					}
					title={<span className={cx('message-userName')}>{userName}</span>}
					description={
						<>
							<span className={cx('home-item-icon')}>
								<EditOutlined />：
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

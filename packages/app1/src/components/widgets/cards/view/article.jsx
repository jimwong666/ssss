import React from 'react';
import { Card } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../styles/index.scss';

const cx = classNames.bind(styles);

export default function ArticleCards(props) {
	const { href, text, operating, time } = props;
	return (
		<a href={href} className={cx('link')}>
			<Card hoverable size="small" className={cx('home-item')}>
				<FileTextOutlined />
				<div className={cx('home-item-content')}>
					<span className={cx('home-item-title')}>
						<p>{text}</p>
					</span>
					<span className={cx('home-item-time')}>
						{operating} {time}
					</span>
				</div>
			</Card>
		</a>
	);
}

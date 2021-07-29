import React from 'react';
import ArticleCards from './article';
import CommentCards from './comment';
import MessageCards from './message';

const localOperating = ['发表于', '编辑于', '删除于'];

export default function Cards(props) {
	const { operating, type } = props;
	const tempProps = {
		...props,
		operating: localOperating[operating],
	};

	switch (type) {
		case 'article':
			return <ArticleCards {...tempProps} />;
		case 'comment':
			return <CommentCards {...tempProps} />;
		case 'message':
			return <MessageCards {...tempProps} />;
		default:
			return <ArticleCards {...tempProps} />;
	}
}

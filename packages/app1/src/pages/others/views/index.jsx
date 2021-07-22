import React from 'react';
import { Form, Button } from 'antd';

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 12,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const RegistrationForm = () => {
	return (
		<Form
			{...formItemLayout}
			name="register"
			initialValues={{
				residence: ['zhejiang', 'hangzhou'],
				prefix: '86',
			}}
			scrollToFirstError
		>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;

import React from 'react';
import { Form, Button, Input } from 'antd';

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
			<Form.Item
				name="nickname"
				label="Nickname"
				tooltip="What do you want others to call you?"
				rules={[
					{
						required: true,
						message: 'Please input your nickname!',
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;

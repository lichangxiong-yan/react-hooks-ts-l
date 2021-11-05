import React from 'react'
import {
  Form,
  Input,
  Button,
  Divider
} from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
export default function index() {
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      // onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "账号是必填的哦"
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "密码是必填的哦!"
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '100%' }}
          >
            登入
          </Button>
        </Form.Item>
        <Divider />
      </Form>
    </div>
  )
}

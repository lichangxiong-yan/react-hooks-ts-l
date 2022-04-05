import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import {
  Form,
  Input,
  Button,
  Divider,
  message
} from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { get } from "lodash"
import axios from "axios"
// import axios from 'axios'

export default function LoginScreen() {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const submit = (values: any) => {
    setLoading(true)
    axios.get(`http://localhost:4000/users?username=${values.username}&password=${values.password}`).then((res: any) => {
      const list: string[] = get(res, "data", [])
      if (list?.length === 0) {
        setLoading(false)
        message.error("用户名密码不匹配")
      } else {
        setLoading(false)
        message.success("登录成功")
        window.sessionStorage.setItem("tokenSession", JSON.stringify(list[0]))
        // 跳转到首页
        history.push('/home')
      }
    })
  }
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={submit}
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
            loading={loading}
          >
            登入
          </Button>
        </Form.Item>
        <Divider />
      </Form>
    </div>
  )
}

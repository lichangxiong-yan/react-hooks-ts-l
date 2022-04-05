import React, { useState } from 'react'
// import {
//   Form,
//   Input,
//   Button,
//   Divider
// } from "antd"
// import { UserOutlined, LockOutlined } from "@ant-design/icons"
import RegisterScreen from './RegisterScreen'
import LoginScreen from './LoginScreen'
import styles from './index.module.scss'

const Login = () => {
  const [isRegister, setIsRegister] = useState<Boolean>(false)
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h3 className={styles.containerTitle}>{!isRegister ? '请登入' : '请注册'}</h3>
        {
          !isRegister
            ? <LoginScreen />
            : <RegisterScreen />
            }
        <div className={styles.loginFoot}>
          <span
            style={{ color: '#1890ff', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => setIsRegister(!isRegister)}
          >{isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}</span>
        </div>
      </div>
    </div>
  )
}
export default Login

import React from 'react'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

const Home = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider>Sider</Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default Home

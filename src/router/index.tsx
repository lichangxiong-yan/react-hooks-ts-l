import React from "react"
import { HashRouter, Route, Redirect, Switch } from "react-router-dom"
// import {
//   EditOutlined,
//   CopyOutlined,
//   ScissorOutlined,
//   DeleteOutlined,
//   BulbOutlined,
//   MessageOutlined,
//   ProfileOutlined,
//   ClusterOutlined
// } from "@ant-design/icons"
import Home from '../page/Home'
import Login from '../page/Login'

// interface Item {
//   id: number;
//   path: string;
//   component: any;
//   exact: boolean;
// }

// const MenuArr = [
//   {
//     title: "首页",
//     icon: EditOutlined,
//     permission: 1, //权限字段
//     path: "/home", //路径跳转
//     id: 1,
//   },
//   {
//     title: "用户管理",
//     icon: CopyOutlined,
//     permission: 3,
//     path: "/user-manage",
//     id: 2,
//     children: [
//       {
//         title: "用户列表",
//         icon: CopyOutlined,
//         path: "/user-manage/users",
//         permission: 3,
//         id: 3,
//       },
//     ],
//   },
//   {
//     title: "权限管理",
//     permission: 3,
//     path: "/right-manage",
//     icon: ScissorOutlined,
//     id: 4,
//     children: [
//       {
//         title: "角色列表",
//         icon: ScissorOutlined,
//         path: "/right-manage/roles",
//         permission: 3,
//         id: 5,
//       },
//       {
//         title: "权限列表",
//         icon: ScissorOutlined,
//         path: "/right-manage/rights",
//         permission: 3,
//         id: 6,
//       },
//     ],
//   },
//   {
//     title: "文章管理",
//     icon: DeleteOutlined,
//     path: "/article-manage",
//     permission: 1,
//     id: 7,
//     children: [
//       {
//         title: "文章列表",
//         icon: DeleteOutlined,
//         path: "/article-manage/list",
//         permission: 1,
//         id: 8,
//       },
//       {
//         title: "文章分类",
//         icon: DeleteOutlined,
//         path: "/article-manage/category",
//         permission: 2,
//         id: 9,
//       },
//     ],
//   },
//   {
//     title: "作品集",
//     icon: BulbOutlined,
//     path: "/collection",
//     permission: 1,
//     id: 10,
//   },
//   {
//     title: "留言板",
//     icon: MessageOutlined,
//     path: "/MessageBoard",
//     permission: 1,
//     id: 11,
//     children: [
//       {
//         title: "留言列表",
//         icon: ProfileOutlined,
//         path: "/messageBoard/list",
//         permission: 1,
//         id: 12,
//       },
//       {
//         title: "留言管理",
//         icon: ClusterOutlined,
//         path: "/messageBoard/management",
//         permission: 2,
//         id: 13,
//       },
//     ],
//   },
// ]
const Router = () => {
  return (
    <HashRouter>
       <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route
            path="/"
            render={() =>
              localStorage.getItem("tokenSession") ? <Home /> : <Redirect to="/login" />} />
          {/* <Redirect to="/dashBoard" />
          <Redirect from="/" to="/home" exact /> */}
        </Switch>
    </HashRouter>
  )
}

export default Router

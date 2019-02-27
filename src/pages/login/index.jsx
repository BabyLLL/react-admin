import React,{Component} from 'react'
import logo from './logo.png'
import './index.less'
import LoginForm from '../../components/login-form'
export default class Login extends Component{
  render(){
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="哈哈"/>
          <h2>React项目: 后台管理系统</h2>
        </div>
        <div className="login-content">
          <div className="login-box">
            <h2>用户登录</h2>
              <LoginForm/>
          </div>
        </div>
      </div>
    )
  }
}
import React,{Component} from 'react'
import {Form,Icon,Input,Button,message} from 'antd';

class LoginForm extends Component{

  callBack = (rule,value,callback) => {

    if(!value){
      callback('不能为空')
    }else if(value.length<4){
      callback('不能小于4位')
    }else if(value.length > 11){
      callback('不能超过11位')
    }else{
      callback()
    }

  }

  handleSubmit = e => {
    e.preventDefault()
    const {validateFields,resetFields} = this.props.form
    validateFields((error,values) => {
      if(!error){
        console.log('正确',values)
      }else{
        resetFields(['password'])
        const errMsg = Object.values(error).reduce((prev,curr) =>{
          return prev + curr.errors[0].message
        },'' )
        message.error(errMsg)
      }
    })

  }



  render(){
    const {getFieldDecorator} = this.props.form
    return(
      <div >
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Form.Item>
            {
              getFieldDecorator(
                'username',{
                  rules:[
                    {required:true , message:'必须填写'},
                    {min:4 , message:'必须大于四个'},
                    {max:11,message:'请小于11位'}
                  ]
                }
              )(<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>)

            }

          </Form.Item>
          <Form.Item>
            {

              getFieldDecorator(
                'password',{
                  rules:[
                    {validator:this.callBack}
                  ]
                }

              )(<Input type='password' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />)

            }
          </Form.Item>
          <Form.Item>
            <Button className='login-btn' type='primary' htmlType='submit'>登录</Button>
          </Form.Item>
        </Form>

      </div>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm)
export default WrappedLoginForm
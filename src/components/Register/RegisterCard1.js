import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { StoreContext } from "../../store"
import { Form, Input, Button, Checkbox } from 'antd';
import { registerToFirebase } from '../../actions'
import { WarningOutlined } from '@ant-design/icons';


function RegisterCard1({ redirect }) {
    const { state:{ userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if(userInfo) history.push(redirect);
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
        <div>
            
            <div className="text-white signup-title">
                Sign Up
            </div>
            <div className="signup-step-container">
                <div className="signup-step-circle text-white">1</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white">1</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white">1</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white">1</div>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <div className="signup-step1-container">
                    <div className="signup-input-title text-white">Enter your email</div>
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                        ]}
                        hasFeedback
                    >
                        <Input
                        placeholder="E-Mail"
                        />
                    </Form.Item>
                
                </div>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="rePassword"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: "Please re-enter your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(
                            new Error("The two passwords that you entered do not match!")
                        );
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value
                            ? Promise.resolve()
                            : Promise.reject(new Error("Should accept agreement")),
                    },
                    ]}
                >
                    <Checkbox>
                    I have read the <Link to={"/"}>agreement</Link>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    {loading ? (
                    <Button
                        type="primary"
                        className="login-form__button"
                        htmlType="submit"
                        loading
                    >
                        Create your account
                    </Button>
                    ) : (
                    <Button
                        type="primary"
                        className="login-form__button"
                        htmlType="submit"
                    >
                        Create your account
                    </Button>
                    )}
                    Already have an account?{" "}
                    <Link to={"/Login?redirect=CheckOut"}>Login</Link>
                    {error === "" ? (
                    <></>
                    ) : (
                    <div className="login-form__error-wrap">
                        <h3 className="login-form__error-title">
                        <WarningOutlined className="site-form-item-icon" />
                        {"  "}There was a problem
                        </h3>
                        <p className="login-form__error-message">{error}</p>
                    </div>
                    )}
                </Form.Item>
            </Form> 
        </div>
         

        </div>  
    );
}

export default RegisterCard1;
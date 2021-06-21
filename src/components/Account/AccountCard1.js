import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { updateUserInfo } from '../../actions'
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';

import { StoreContext } from "../../store";
import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col, Spin } from "antd";

import { WarningOutlined } from '@ant-design/icons';



function AccountCard1() {
  const { state: { userInfo: { info}, userSignin: { loading,error } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await updateUserInfo(
        dispatch, values
    );
  };  
    return (
        <div className="text-white">
        {loading
            ? (
            <div className="spinner-wrap">
                <Spin indicator={antIcon} className="spinner" />
            </div>
            ) : (
            <div className="">
                <div>
                    <img
                        className="artist-post-thumbnail"
                        src={info.thumbnail}
                        alt={info.nickName} 
                    />
                </div>
                <div>
                    {info.nickName}, welcome to Weverse!
                </div>
                <div>
                    <Form
                        name="normal_login"
                        className=""
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
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
                            <Input.Password 
                            placeholder="Password"
                            />
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
                            <Input.Password
                            placeholder="Re-enter password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="Name"
                            />
                        </Form.Item>
                        {loading ? (
                            <Button
                                type="primary"
                                className="login-form__button"
                                htmlType="submit"
                                loading
                            >
                                Confirm
                            </Button>
                            ) : (
                            <Button
                                type="primary"
                                className="login-form__button"
                                htmlType="submit"
                            >
                                Confirm
                            </Button>
                            )}
                            
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
                    </Form>
                </div>
            </div>
            )
        }
        </div>  
    );
}

export default AccountCard1;
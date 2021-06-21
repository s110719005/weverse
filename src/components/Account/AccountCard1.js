import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { updateUserInfo,setUserInfo } from '../../actions'
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
    await setUserInfo(dispatch);
    setIsEdit(false);
    setIsEditInput("none");
    setIsEditText("block");
  };  
  const [isEdit, setIsEdit] = useState(false);
  const [isEditText, setIsEditText] = useState("block");
  const [isEditInput, setIsEditInput] = useState("none");
//   onClick={() => {
//     setIisStep1("none");
//     setIisStep2("block");
//     setStep1color("white");
//     setStep1bgcolor("transparent");
//     setStep2color("black");
//     setStep2bgcolor("var(--weverseGreen)");
//  }}
    return (
        <div className="text-white">
        {loading
            ? (
            <div className="spinner-wrap">
                <Spin indicator={antIcon} className="spinner" />
            </div>
            ) : (
            <div >
                
                <div className="text-white">
                    
                    <Form
                        name="normal_login"
                        className=""
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <div className="account-crd1-welcome">
                            <img
                                className="account-card1-thumbnail"
                                src={info.thumbnail}
                                alt={info.nickName} 
                            />
                            <div className="account-crd1-welcome-text text-white">
                                {info.nickName}, welcome to Weverse!
                            </div>
                            { isEdit? (
                                <div className="account-editing-btn">
                                    <div className="account-cancel-btn">
                                        <Button
                                            type="primary"
                                            className="login-form__button"
                                                onClick={() => {
                                                    setIsEdit(false);
                                                    setIsEditInput("none");
                                                    setIsEditText("block");
                                                }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                    {loading ? (
                                    <div className="account-save-btn">
                                        <Button
                                            type="primary"
                                            className="login-form__button"
                                            htmlType="submit"
                                            loading
                                        >
                                            Save
                                        </Button>
                                    </div>

                                ) : (
                                    <div className="account-save-btn">
                                        <Button
                                            type="primary"
                                            className="login-form__button"
                                            htmlType="submit"
                                        >
                                            Save
                                        </Button>
                                    </div>

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
                                </div>
                            ): (
                                <div className="account-edit-btn">
                                    <Button
                                    type="primary"
                                    className="login-form__button"
                                    onClick={() => {
                                        setIsEdit(true);
                                        setIsEditInput("block");
                                        setIsEditText("none");
                                    }}
                                >
                                    Edit
                                </Button>
                                </div>
                            )

                            }
                            
                        </div>
                        <div className="account-card1-samllcard-row text-white">
                            <div className="account-card1-smallcard">
                                <div className="account-card1-smallcard-title">
                                    Name
                                </div>
                                <div className="account-card1-input-title">
                                    Name
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.name}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="name"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="Name"
                                        initialValues={info.name}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input-title">
                                    Nickname
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.nickName}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="nickName"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="nickName"
                                        initialValues={info.nickName}
                                        />
                                    </Form.Item>
                                </div>
                                
                            </div>
                            <div className="account-card1-smallcard">
                                <div className="account-card1-smallcard-title">
                                    Contact Info
                                </div>
                                <div className="account-card1-input-title">
                                    Email
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.email}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="email"
                                        
                                        hasFeedback
                                        >
                                        <Input
                                        placeholder="E-Mail"
                                        initialValues={info.email}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input-title">
                                    Phone Number
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.phoneNumber}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="phoneNumber"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="phoneNumber"
                                        initialValues={info.phoneNumber}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="account-card1-smallcard">
                                <div className="account-card1-smallcard-title">
                                    Address
                                </div>
                                <div className="account-card1-input-title">
                                    Address 1
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.address}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="address"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="address"
                                        initialValues={info.address}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input-title">
                                    Address 2
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.address2}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="address2"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="address 2"
                                        initialValues={info.address2}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="account-card1-samllcard-row text-white">
                            <div className="account-card1-smallcard">
                                <div className="account-card1-smallcard-title">
                                    Personal Info
                                </div>
                                <div className="account-card1-input-title">
                                    Birthday
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.birthday}&nbsp;
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="birthday"
                                        
                                        hasFeedback
                                    >
                                        <Input
                                        placeholder="yyyy/mm/dd"
                                        initialValues={info.birthday}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input-title">
                                    Gender
                                </div>
                                <div className="account-card1-infotext"
                                    style={{display:isEditText}}
                                >
                                    {info.gender}
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="gender"
                                        
                                        hasFeedback
                                    >
                                        <Select
                                        placeholder="Gender"
                                        initialValues={info.gender}
                                        //onChange = {this.onGenderChange}
                                        >
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                            <Select.Option value="non-binary">Non-Binary</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="account-card1-smallcard">
                                <div className="account-card1-smallcard-title">
                                    Notification
                                </div>
                                <div className="account-card1-input account-checkbox-margin"
                                    style={{display:isEditText}}
                                >
                                    <Form.Item
                                        //name="notify1"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify1}
                                            disabled={true}
                                        >
                                            New Product
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input account-checkbox-margin"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="notify1"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify1}
                                        >
                                            New Product
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditText}}
                                >
                                    <Form.Item
                                        //name="notify1"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify2}
                                            disabled={true}
                                        >
                                            comments from post
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="notify2"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify2}
                                        >
                                            Nickname is required
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditText}}
                                >
                                    <Form.Item
                                        //name="notify1"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify2}
                                            disabled={true}
                                        >
                                            likes from post
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
                                    <Form.Item
                                        name="notify3"
                                    >
                                        <Checkbox
                                            defaultChecked={info.notify3}
                                        >
                                            Nickname is required
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="account-card1-smallcard"
                                style={{display:isEditInput}}
                            >
                                <div className="account-card1-smallcard-title">
                                    Password
                                </div>
                                <div className="account-card1-input-title">
                                    Password
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
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
                                </div>
                                <div className="account-card1-input-title">
                                    Reenter Password
                                </div>
                                <div className="account-card1-input"
                                    style={{display:isEditInput}}
                                >
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
                                </div>
                            </div>
                        </div>
                        

                        
                        
                        
                    </Form>
                </div>
            </div>
            )
        }
        </div>  
    );
}

export default AccountCard1;
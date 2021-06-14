import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { StoreContext } from "../../store"
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
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
  const [isStep1, setIisStep1] = useState("block");
  const [isStep2, setIisStep2] = useState("none");
  const [isStep3, setIisStep3] = useState("none");
  const [isStep4, setIisStep4] = useState("none");
  const [isStep5, setIisStep5] = useState("none");
  const [step1color, setStep1color] = useState("black");
  const [step2color, setStep2color] = useState("white");
  const [step3color, setStep3color] = useState("white");
  const [step4color, setStep4color] = useState("white");
  const [step1bgcolor, setStep1bgcolor] = useState("var(--weverseGreen)");
  const [step2bgcolor, setStep2bgcolor] = useState("transparent");
  const [step3bgcolor, setStep3bgcolor] = useState("transparent");
  const [step4bgcolor, setStep4bgcolor] = useState("transparent");
  useEffect(() => {
    if(userInfo) history.push("/Welcome");
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="register-card">
        <div>
            
            <div className="text-white signup-title">
                Sign Up
            </div>
            <div className="signup-step-container">
                <div className="signup-step-circle text-white"
                style={{color:step1color,backgroundColor:step1bgcolor}}
                >1</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white"
                style={{color:step2color,backgroundColor:step2bgcolor}}
                
                >2</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white"
                style={{color:step3color,backgroundColor:step3bgcolor}}
                
                >3</div>
                <div className="signup-step-line">——</div>
                <div className="signup-step-circle text-white"
                style={{color:step4color,backgroundColor:step4bgcolor}}
                
                >4</div>
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
                <div className="signup-step1-container"
                    style={{display:isStep1}}
                >
                    <div className="signup-stepinput-container">
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
                    <div className="register-stepbtn-container">
                        <div className="register-stepbtn-back">
                            <Link 
                                to={"/LogIn"}
                            >
                                Back
                            </Link>
                        </div>
                
                        <Button
                            type="primary"
                            className="login-form__button"
                            onClick={() => {
                                setIisStep1("none");
                                setIisStep2("block");
                                setStep1color("white");
                                setStep1bgcolor("transparent");
                                setStep2color("black");
                                setStep2bgcolor("var(--weverseGreen)");
                             }}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <div className="signup-step2-container"
                    style={{display:isStep2}}
                >
                    <div className="signup-stepinput-container">
                    <div className="signup-input-title text-white">Enter your password</div>

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
                    <div className="signup-input-title text-white">Confirm ypur password</div>

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
                    <div className="register-stepbtn-container">
                        <div className="register-stepbtn-back">
                            <Button
                                type="primary"
                                className="login-form__button "
                                onClick={() => {
                                    setIisStep1("block");
                                    setIisStep2("none");
                                    setStep2color("white");
                                    setStep2bgcolor("transparent");
                                    setStep1color("black");
                                    setStep1bgcolor("var(--weverseGreen)");
                                 }}
                            >
                                Back
                            </Button>
                        </div>
                
                        <Button
                            type="primary"
                            className="login-form__button"
                            onClick={() => {
                                setIisStep3("block");
                                setIisStep2("none");
                                setStep2color("white");
                                setStep2bgcolor("transparent");
                                setStep3color("black");
                                setStep3bgcolor("var(--weverseGreen)");
                             }}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <div className="signup-step3-container"
                    style={{display:isStep3}}
                >
                    <div className="signup-stepinput-container">
                        <div className="signup-input-title text-white">Name</div>
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
                        
                        <div className="signup-birthdaygender">
                            <div className="signup-birthday">
                                <div className="signup-input-title text-white">Birthday</div>
                                <Form.Item
                                    name="birthday"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please select your birthday!",
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <DatePicker
                                    placeholder="Birthday"
                                    />
                                </Form.Item>
                            </div>
                            <div className="signup-gender">
                                <div className="signup-input-title text-white">Gender</div>
                                <Form.Item
                                    name="gender"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please select your gender!",
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Select
                                        placeholder="Gender"
                                        //onChange = {this.onGenderChange}
                                    >
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="non-binary">Non-Binary</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div className="register-stepbtn-container">
                    <div className="register-stepbtn-back">
                            <Button
                                type="primary"
                                className="login-form__button "
                                onClick={() => {
                                    setIisStep2("block");
                                    setIisStep3("none");
                                    setStep3color("white");
                                    setStep3bgcolor("transparent");
                                    setStep2color("black");
                                    setStep2bgcolor("var(--weverseGreen)");
                                 }}
                            >
                                Back
                            </Button>
                        </div>
                
                        <Button
                            type="primary"
                            className="login-form__button"
                            onClick={() => {
                                setIisStep4("block");
                                setIisStep3("none");
                                setStep3color("white");
                                setStep3bgcolor("transparent");
                                setStep4color("black");
                                setStep4bgcolor("var(--weverseGreen)");
                             }}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <div className="signup-step4-container"
                    style={{display:isStep4}}
                >
                    <div className="signup-stepinput-container">
                        <div className="signup-input-title text-white">Address</div>
                        <Form.Item
                            name="address"
                            rules={[
                            {
                                required: true,
                                message: "Please input your Adress!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="Address"
                            />
                        </Form.Item>
                        <div className="signup-input-title text-white">Phone Numbers</div>
                        <Form.Item
                            name="phone"
                            rules={[
                            {
                                required: true,
                                message: "Please input your Phone Number!",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input
                            placeholder="Phone numbers"
                            />
                        </Form.Item>
                        
                        
                    </div>
                    <div className="register-stepbtn-container">
                        <div className="register-stepbtn-back">
                            <Button
                                type="primary"
                                className="login-form__button "
                                onClick={() => {
                                    setIisStep3("block");
                                    setIisStep4("none");
                                    setStep4color("white");
                                    setStep4bgcolor("transparent");
                                    setStep3color("black");
                                    setStep3bgcolor("var(--weverseGreen)");
                                 }}
                            >
                                Back
                            </Button>
                            
                        </div>
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
                        {/* <Form.Item>
                            
                        </Form.Item> */}
                        
                    </div>
                </div>
                
            </Form> 
        </div>
         

        </div>  
    );
}

export default RegisterCard1;
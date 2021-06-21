import { useState,useContext,useEffect } from "react";
import { Card,Space } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"

import { SmileOutlined,StarOutlined,LikeOutlined} from '@ant-design/icons';
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import { createFanPost,setFanPost } from '../../actions'
import { WarningOutlined } from '@ant-design/icons';


export default function AddPostCard() {
    const {  state: { userInfo: { info},createFanPost:{loading,error}},dispatch } = useContext(StoreContext);
  const [isMoment, setIsMoment] = useState("0px");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const onSearch = value => console.log(value);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await createFanPost(dispatch,values.content);
    await setFanPost(dispatch);
    form.resetFields();
  }; 

  useEffect(() => {
      
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    return (
        <div className="fan-postcard-container">
            <div className="fan-postcard-gradient">
                <div className="fan-postcard">
                    <div className="text-white fan-postcard-title">
                        Create New Post
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
                            <div className="fan-postcard-content-container">
                                <div className="artist-reply-thumbnail">
                                    <img
                                        className="artist-reply-thumbnail"
                                        style={{borderWidth:isMoment}}
                                        src={info.thumbnail}
                                        alt={info.nickName}
                                    />
                                    
                                </div>

                                <div>
                                    <Form.Item
                                            name="content"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please enetr content!",
                                            },
                                            ]}
                                        >
                                            <Input.TextArea
                                            placeholder="What's on your mind.."
                                            initialValues=""
                                            defaultValue=""
                                            />
                                    </Form.Item>
                                </div>
                            </div>
                            {/* <div className="account-save-btn">
                                <Button
                                    type="primary"
                                    className="login-form__button"
                                    htmlType="submit"
                                >
                                    Share
                                </Button>
                            </div> */}
                            {loading ? (
                                    <div className="account-save-btn">
                                        <Button
                                            type="primary"
                                            className="login-form__button"
                                            htmlType="submit"
                                            loading
                                        >
                                            Share
                                        </Button>
                                    </div>

                                ) : (
                                    <div className="account-save-btn">
                                        <Button
                                            type="primary"
                                            className="login-form__button"
                                            htmlType="submit"
                                        >
                                            Share
                                        </Button>
                                    </div>

                                )}
                                
                                
                        </Form>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
}

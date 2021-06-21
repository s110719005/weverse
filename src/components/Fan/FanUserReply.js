import { useState,useContext,useEffect } from "react";
import { Card,Input,Space } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"

import { SmileOutlined,StarOutlined,LikeOutlined} from '@ant-design/icons';


export default function FanUserReply({ fanPost }) {
    const { state: { userInfo: { info}  },dispatch } = useContext(StoreContext);
  const [isMoment, setIsMoment] = useState("0px");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const onSearch = value => console.log(value);
  const { Search } = Input;
  useEffect(() => {
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    return (
        <div className="artist-reply-container artist-userreply-container">
            <div className="artist-reply-top">
                <div className="artist-reply-thumbnail">
                    <img
                        className="artist-reply-thumbnail"
                        style={{borderWidth:isMoment}}
                        src={info.thumbnail}
                        alt={info.nickName}
                    />
                    
                </div>
                <div className="artist-reply-input">
                    <Space>
                        <Search placeholder="Leave a comment ;)" onSearch={onSearch} enterButton="Post!" />
                    </Space>
                </div>
            </div>
            
        </div>
    );
}

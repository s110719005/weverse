import { useState,useContext,useEffect } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"

import { SmileOutlined,StarOutlined,LikeOutlined} from '@ant-design/icons';

import { setReplyUserName } from '../../actions'


export default function ArtistPostReplies({ artistPostReply }) {
    const { state: { replyName  },dispatch } = useContext(StoreContext);
  const [isMoment, setIsMoment] = useState("0px");
  const [isModalVisible, setIsModalVisible] = useState(false);


   // const test;
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  useEffect(async () => {
       
    //setUserName(test);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    return (
        <div className="artist-reply-container">
            <div className="artist-reply-top">
                <div className="artist-reply-thumbnail"></div>
                <div className="artist-reply-content">
                    <div>
                        User&nbsp;&nbsp;
                        {/* ya&nbsp;&nbsp; */}
                    </div>
                    <div>
                        {artistPostReply.replyContent}
                    </div>
                </div>
            </div>
            <div className="artist-reply-like">
                <div className="icon-like">
                    <LikeOutlined
                    
                    />
                </div>
                &nbsp;{artistPostReply.like}
                &nbsp;&nbsp;
                <div className="artist-reply-btn">
                    Reply
                </div>
                &nbsp;06.21.2021,06:22
            </div>
        </div>
    );
}

import { useState,useContext,useEffect } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"

import { SmileOutlined,StarOutlined,LikeOutlined} from '@ant-design/icons';
import FanPostReplies from "./FanPostReply";
import FanUserReply from "./FanUserReply";
import { setReplyUserName } from '../../actions'


export default function FanPostItem({ fanPost }) {
    const { state: { replyName  },dispatch } = useContext(StoreContext);
  const [isMoment, setIsMoment] = useState("0px");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState("User");

  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const setReplyName = async (uid) => {
    //await setReplyUserName(dispatch,uid);
    //setUserName(replyName.name);
    
    console.log(replyName);
  }
  useEffect(() => {
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    return (
        <div className="artist-post-card">
            <div className="artist-post-header">
                <div className="artist-post-header-left">
                    <img
                        className="artist-post-thumbnail"
                        style={{borderWidth:isMoment}}
                        src={fanPost.thumbnail}
                        alt={fanPost.nickName} 
                    />
                    <div className="artist-post-header-lefttext">
                        <div className="artist-post-artistname">
                            {fanPost.nickName}
                        </div>
                        <div className="artist-post-date">
                            2021.06.15,16:39
                        </div>
                    </div>
                </div>
                <div>
                    <StarOutlined 
                        style={{ fontSize: '20px' }}
                    />
                </div>
            </div>
            <div className="artist-post-content">
                {fanPost.content}
            </div>
            <div className="artist-post-image-container">
                {fanPost.image.map(fanPostImage => (
                    <div className="artist-post-image-container">
                        <img
                            className="artist-post-1image"
                            style={{borderWidth:isMoment}}
                            src={fanPostImage}
                            alt={fanPost.nickName} 
                        />
                    </div>
                ))}
            </div>
            <div className="artist-post-like">
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{fanPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{fanPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{fanPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{fanPost.like}
                
            </div>
            <div>
                {fanPost.reply.map((fanPostReply,index) => 
                    
                    <div>
                        {/* {index < artistPost.reply.length ? 
                            (<div>
                                {setReplyName (artistPostReply.uid)}
                            </div>) : 
                            {}
                        } */}
                    
                    {(
                        index < 2 ?(
                            <div>
                                {/* {artistPostReply.uid} */}
                                <FanPostReplies fanPostReply={fanPostReply} />
                            </div>
                        ):(
                            index === 2 ?(
                                <div className="artist-more-comments-container">
                                    <div className="artist-more-comments">
                                        more comments
                                    </div>
                                </div>
                            ):(
                                <div className="">
                                </div>
                            )
                            )
                    )}
                    </div>
                )}
            </div>
            <div>
                <FanUserReply fanPost = {fanPost}/>
            </div>
        </div>
    );
}

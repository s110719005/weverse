import { useState,useContext,useEffect } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"

import { SmileOutlined,StarOutlined,LikeOutlined} from '@ant-design/icons';
import ArtistPostReplies from "./ArtistPostReply";
import ArtistUserReply from "./ArtistUserReply";
import { setReplyUserName } from '../../actions'


export default function ArtistPostItem({ artistPost }) {
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
                        src={artistPost.thumbnail}
                        alt={artistPost.artistName} 
                    />
                    <div className="artist-post-header-lefttext">
                        <div className="artist-post-artistname">
                            {artistPost.artistName}
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
                {artistPost.content}
            </div>
            <div>
                {
                    artistPost.image.length === 4 ?
                    (
                        <div className="artist-post-image-container">
                           <div>
                                {artistPost.image.map((artistPostImage,index) => (
                                    
                                    index > 1 ? (
                                        <div className="">
                                            <img
                                                className="artist-post-4images-small"
                                                style={{borderWidth:isMoment}}
                                                src={artistPostImage}
                                                alt={artistPost.artistName} 
                                            />
                                        </div>
                                    ):(
                                        <div>
                                        </div>
                                    )
                                ))}
                            </div>
                           <div>
                                {artistPost.image.map((artistPostImage,index) => (
                                    index < 2 ? (
                                        <div className="">
                                            <img
                                                className="artist-post-4images-small"
                                                style={{borderWidth:isMoment}}
                                                src={artistPostImage}
                                                alt={artistPost.artistName} 
                                            />
                                        </div>
                                    ):(
                                        <div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ):
                    (
                        artistPost.image.length === 3 ?
                        (
                            <div className="artist-post-image-container">
                                <div>
                                    {artistPost.image.map((artistPostImage,index) => (
                                        index === 0 ? (
                                            <div className="">
                                                <img
                                                    className="artist-post-3images-big"
                                                    style={{borderWidth:isMoment}}
                                                    src={artistPostImage}
                                                    alt={artistPost.artistName} 
                                                />
                                            </div>
                                        ):(
                                            <div>
                                            </div>
                                        )
                                    ))}
                                </div>
                                <div>
                                    {artistPost.image.map((artistPostImage,index) => (
                                        index === 0 ? (
                                            <div>
                                            </div>
                                        ):(
                                            <div className="">
                                                <img
                                                    className="artist-post-3images-small"
                                                    style={{borderWidth:isMoment}}
                                                    src={artistPostImage}
                                                    alt={artistPost.artistName} 
                                                />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ):
                        (
                            artistPost.image.length === 2 ?
                            (
                                <div className="artist-post-image-container">
                                    {artistPost.image.map(artistPostImage => (
                                        <div className="">
                                            <img
                                                className="artist-post-2imagesl"
                                                style={{borderWidth:isMoment}}
                                                src={artistPostImage}
                                                alt={artistPost.artistName} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            ):
                            (
                                // length=1
                                <div className="artist-post-image-container">
                                    {artistPost.image.map(artistPostImage => (
                                        <div className="artist-post-image-container">
                                            <img
                                                className="artist-post-1image"
                                                style={{borderWidth:isMoment}}
                                                src={artistPostImage}
                                                alt={artistPost.artistName} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        )
                        
                    )
                }
                
            </div>
            <div className="artist-post-like">
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{artistPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{artistPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{artistPost.like}
                &nbsp;&nbsp;
                <SmileOutlined
                    style={{ fontSize: '16px' }}
                />
                &nbsp;{artistPost.like}
                
            </div>
            <div>
                {artistPost.reply.map((artistPostReply,index) => 
                    
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
                                <ArtistPostReplies artistPostReply={artistPostReply} />
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
                <ArtistUserReply artistPost = {artistPost}/>
            </div>
        </div>
    );
}

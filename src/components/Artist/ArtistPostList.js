import { useState,useContext,useEffect } from "react";
import { Link,useHistory  } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { checkLogin,loginToFirebase } from '../../actions'

import { StoreContext } from "../../store";
import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col, Spin } from "antd";
import ArtistPostItem from "./ArtistPostItem";



function ArtistPostList() {
  const { state: { artistPostList: { artistPosts }, requestArtistPosts: { loading } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
    
    return (
        <div className="text-white">
        {loading
            ? (
            <div className="spinner-wrap">
                <Spin indicator={antIcon} className="spinner" />
            </div>
            ) : (
            <div className="artist-post-container">

                {artistPosts.map(artistPost => (
                    <div className="">
                        <ArtistPostItem artistPost={artistPost}/>
                    </div>
                ))}
            </div>
            )
        }
        </div>  
    );
}

export default ArtistPostList;
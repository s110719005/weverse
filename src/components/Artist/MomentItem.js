import { useState,useContext,useEffect } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../../store"
import { setProductDetail } from "../../actions";
import MomentModal from "./MomentModal";


export default function MomentItem({ moment }) {
    const { dispatch } = useContext(StoreContext);
  const [isMoment, setIsMoment] = useState("0px");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  useEffect(() => {
    if(moment.isMoment === true)setIsMoment("3px");
    else setIsMoment("0px");
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    return (
        <div>
            <MomentModal isModalVisible = {isModalVisible} toggleModal = {toggleModal} moment={moment}/>
            <div className="moment-set">
                
                <img
                    className="moment-thumbnail"
                    style={{borderWidth:isMoment}}
                    src={moment.thumbnail}
                    alt={moment.stageName} 

                    onClick={() => {
                        if(moment.isMoment===true) toggleModal();
                     }}
                />
                <div className="moment-artist-name">
                    {moment.stageName}
                </div>
            </div>
        </div>
    );
}

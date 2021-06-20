import { Modal, Button, Select } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem, removeCartItem, setProductDetail } from "../../actions";

const { Option } = Select;

export default function MomentModal({ isModalVisible, toggleModal,moment }) {
   const handleCancel = () => toggleModal(!isModalVisible);
   

   

   useEffect(() => {
      //localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [])

   

   return (
      <Modal
         title="Moment"
        //  visible="true"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
         className=""
         centered
         width={425}
        marginLeft={"0px"}
        closable = {false}
         style={{
            top:"65px",
            heighr:"30rem"
         }}
      >
         <div className="moment-modal">
            
            <div className="text-white">
                {moment.moment.map(momentModal => (
                    
                    <div className="text-white">
                        <div className="moment-modal-title">
                            <img
                                className="moment-modal-thumbnail"
                                src={moment.thumbnail}
                                alt={moment.stageName} 
                                />
                            <div className="moment-modal-text">
                                <div className="text-white">
                                    {moment.stageName}
                                </div>
                                <div className="text-white">
                                    2021.06.20, 07:26
                                </div>
                            </div>
                            
                        </div>
                        <div className="moment-modal-timeline">
                                   
                        </div>
                        <div className="moment-modal-picture-container">
                            <img
                                className="moment-picture"
                                src={momentModal.image}
                                alt={moment.stageName} 
                                />
                        </div>
                        <div className="text-white moment-modal-like">
                            <SmileOutlined />&nbsp;{momentModal.like}&nbsp;&nbsp;
                            <SmileOutlined />&nbsp;{momentModal.like}&nbsp;&nbsp;
                            <SmileOutlined />&nbsp;{momentModal.like}&nbsp;&nbsp;
                            <SmileOutlined />&nbsp;{momentModal.like}
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </Modal>
   );
}
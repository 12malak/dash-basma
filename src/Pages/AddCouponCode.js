import React, { useState,useEffect } from "react";
import NavBar from "../component/NavBar";
import "../Css/addCourse.css";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; 
import { useNavigate } from "react-router-dom";
function AddCouponCode() {
const [coupon_code, setCoupon_code] = useState("")
const navigate=useNavigate()
  const handlePost = async () => {
    if (!coupon_code) {
      Toastify({
        text: "Please Fill All Field",
        duration: 3000, // Duration in milliseconds
        gravity: "top", // 'top' or 'bottom'
        position: "right", // 'left', 'center', 'right'
        backgroundColor: "#CA1616",
      }).showToast();
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/coupon/add",
        { coupon_code }
      );
      // setDepartmentData(response.data);
      Toastify({
        text: "Added completely",
        duration: 3000, // Duration in milliseconds
        gravity: "top", // 'top' or 'bottom'
        position: "right", // 'left', 'center', 'right'
        backgroundColor: "#F57D20",
      }).showToast();
navigate('/coupon')
    } catch (error) {
      console.log(`Error fetching post data ${error}`);
    }
  };
  return (
    <>
      <NavBar title={"الكوبونات"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="title_add_course">اضافة كوبون</div>
          </div>
        </div>
        <div className="row mt-4  d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p className="input_title_addcourse"> رمز الكوبون   </p>
            <input type="text" className="input_addcourse" onChange={(e)=>setCoupon_code(e.target.value)} />{" "}
          </div>
        
        
        </div>
      
        <div className="row mt-4  d-flex justify-content-center align-items-center">
         
          <div className=" d-flex justify-content-center align-items-center ">

        <button className="btn_addCourse px-5 py-2 mt-5 " onClick={handlePost}>اضافة</button>
          </div>
     
        </div>

      </div>

    
    </>
  );
}

export default AddCouponCode;

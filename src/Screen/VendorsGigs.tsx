import FooterData from "../compoent/Footer";
import NavData from "../compoent/NavData";
import Popularvenders from "../compoent/Popularvenders";
import VendorsGigsCard from "../compoent/VendorGigsCard";
import WInput from "../compoent/WInput";
import "./VendorsGigs.css";
import { useNavigate } from "react-router-dom";

export default function VendorsGigs() {
  let Navigate = useNavigate()
  return (
    <>
      <NavData />
      <div className="container-fluid backgroundtwo w-100 ">
        <div className="   h-screen flex justify-center items-center">
          <div className="text-center ">
            <h1 className="text-white fs-1 fw-bold">Find the best</h1>
            <p className="text-white fs-4 fw-bold">
              Event vendors For Occasion
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <h1>Popular Vendors</h1>
      </div>

      <div>
        <div className=""></div>
        <div>
          <Popularvenders />
        </div>
      </div>

      <div className="container-fluid px-5 py-3 ">
        <div className="row justify-content-center align-items-center g-2 ">
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 ">
            <h1 className="h6 text-bold  margin-r-5 fs-2">Vendors </h1>
            <p className=" ">
              Showing
              <span className="text-bold"> 33048 results</span>
              as per your search criteria
            </p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
            <div className="input-group  ">
              <WInput variant={"outlined"} label="Search" type="text" />
              <button className="btn btn-outline-secondary" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.794 14.216l-4.612-4.61A6.5 6.5 0 1 0 9.5 15.5a6.5 6.5 0 0 0 1.684-.224l4.61 4.612a1 1 0 0 0 1.414-1.414zM9.5 13A5.5 5.5 0 1 1 9.5 2a5.5 5.5 0 0 1 0 11z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="row justify-content-center align-items-center g-2 my-4">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <VendorsGigsCard
                VendorsName="Pollar"
                citytext="Karachi"
                headingimg="https://image.wedmegood.com/resized/1000X/uploads/member/46281/1646416459_AJE04917.jpg?crop=5,829,1728,972"
                icontext="4.8(reviews 100)"
                buttontext="Detail"
                Price="Rs:25000"
                onclick={()=>Navigate("/VendorsDetail")}
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <VendorsGigsCard
                VendorsName="7Clicks Photography"
                citytext="Karachi"
                headingimg="https://image.wedmegood.com/resized/450X/uploads/member/1559361/1647591423_77498460.JPG?crop=11,136,2026,1140"
                icontext="4.8(reviews 100)"
                buttontext="Detail"
                Price="Rs:25000"
                onclick={()=>Navigate("/VendorsDetail")}
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <VendorsGigsCard
                VendorsName="Pollar"
                citytext="Karachi"
                headingimg="https://image.wedmegood.com/resized/1000X/uploads/member/46281/1646416459_AJE04917.jpg?crop=5,829,1728,972"
                icontext="4.8(reviews 100)"
                buttontext="Detail"
                Price="Rs:25000"
                onclick={()=>Navigate("/VendorsDetail")}
              />
            </div>
          </div>
        </div>
      </div>

      <FooterData />
    </>
  );

}

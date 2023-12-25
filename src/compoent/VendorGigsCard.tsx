// VendorsGigsCard


// VenuesGigs Card Ka Comment hai 
import './GigsStyle.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import StarIcon from '@mui/icons-material/Star';
type typeprops ={
    headingimg:string
      
    VendorsName:string
    icontext:string
    citytext:string
    
    Price:string
    buttontext:string
    onclick?:any
   

}
export default function VendorsGigsCard(props:typeprops){
let {headingimg,VendorsName,icontext,citytext,Price,buttontext,onclick}=props
    return <>

    <div className="card p-2 custom-card">
            <img src={headingimg} className="object-fit-cover w-100" style={{height: "214px", borderRadius: "10px"}}  loading="eager" id="vendor-card-0"/>
                    <div className="card-body">
                        <div className="row justify-content-start align-items-start g-2">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* Vendors Name */}
                                <span className="card-title fw-bolder  h5">{VendorsName}</span>
                             {/* Vendors Name */}
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 text-end ">
                            
                                <span className="card-text text-secondary  ">
                                    <StarIcon  style={{color:"#e72e77"}}/>
                                   <span className="text-secondary">{icontext}</span>
                                    
                                </span>
                            </div>
                                
                        </div>

                        {/* Location */}
                        <div className="card-text text-secondary ">
                          <AddLocationIcon/>
                          {citytext}
                           {/* Location */}
                            <br/>

                            {/* Price */}
                            <span className="h5 text-dark">{Price}</span>
                            {/* Price */}


                        </div>



                        
                        <div className="row justify-content-center align-items-center g-2 text-end">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col">   
                                <button className="text-light px-4 py-2 custom-button" onClick={onclick}>{buttontext}</button>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>


                
    </>
}
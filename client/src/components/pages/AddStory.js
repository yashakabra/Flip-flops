import '../styles/AddStory.css';
import adminloginimg from '../images/Anxiety.png';
import { Button,Row,Col,Image} from 'react-bootstrap';
import { TextField,MenuItem,Card,Typography,Box} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';



const AddStory = () => {
    const disasters = [
        {
          label: 'Earthquakes',
          value: 'Earthquakes'
        },
        {
          label: 'Volcanoes',
          value: 'Volcanoes'
        },
        {
          label: 'Hurricanes',
          value: 'Hurricanes'
        },
        {
          label: 'Typhoons',
          value: 'Typhoons'
        },
        {
          label: 'Tsunamis',
          value: 'Tsunamis'
        },
        {
          label: 'Floods',
          value: 'Floods'
        },
        {
          label: 'Cloud Bursts',
          value: 'Cloud Bursts'
        },
        {
          label: 'Landslides',
          value: 'Landslides'
        },
        {
          label: ' Avalanches',
          value: ' Avalanches'
        },
        {
          label: 'Wildfires',
          value: 'Wildfires'
        },
    
      ];
  return (
    <>
        
        <div className="maincontainer" style={{boxSizing:"border-box"}}>
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image">
                <img src={adminloginimg} alt="" style={{border:"none",height:"70%",width:"90%",marginTop:"110px",marginLeft:"60px"}} />
                </div>


                
                <div class="col-md-6 " style={{overflow:"auto",maxHeight:"710px"}}>
                    <div class="login d-flex align-items-center py-9">

                       
                        <div class="container mt-5">
                          
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                    <h3 class="text-center display-4" style={{color:"#0095b6",fontWeight:"600"}}>Fill Details</h3>
                                    
                                    <form>
                                    <TextField  style={{color: "#cf92c4"}}
                    fullWidth 
                    margin="normal"
                    required
                    color='primary'
                    name="Full Name"
                    label="Full Name"
                    type="text"
                    id="name" 
                  />
                                     <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    type="text"
                    id="age"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="curAdd"
                    label="Place of Disaster/Misfortune"
                    type="text"
                    id="curAdd"
                    helperText=" "
                  />















                                        {/* <div class="form-group mb-3 mt-3">
                                            <input id="name" type="text" placeholder="Full Name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="age" type="text" placeholder="Current Age" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="form-group mb-3 mt-3">
                                            <input id="location" type="text" placeholder="Place of Disaster/Mishap" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div> */}
                                        <Row>
                    <Col>
                    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '17ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Type of Disaster that affected"
          defaultValue="Earthquake"
          helperText=""
        >
          {disasters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
                    </Col>
                    <Col>
                    <TextField style={{marginTop:10}}
                              name="date"
                              format="MM/dd/yyyy"
                              
                              label="Date of Disaster"
                              type="date"
                              variant="outlined"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                    </Col>
                  </Row>
                  
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="aadhar"
                    label="AADHAR Card Number"
                    type="text"
                    id="aadhar"
                  />

<TextField
                    margin="normal"
                    required
                    fullWidth
                    name="aadhar"
                    label="Phone Number"
                    type="tel"
                    id="phoneNo"
                    inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
                  />

<TextField
                    margin="normal"
                    required
                    fullWidth
                    name="upi"
                    label="UPI ID Number"
                    type="text"
                    id="upi"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    prefix="₹"
                    name="amount"
                    label="Amount Needed to resettle"
                    type="text"
                    id="amount"
                    

                  >$</TextField>

 <div
  variant="contained"
          color="primary"
          type="submit"
  component="label"
>
  Your Image: 
  <input 
    type="file"
  />
</div>
  <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    name="BLOG"
                    label="Tell the world your survival story"
                    type="text"
                    id="blog"
                    rows={5}
                    maxRows={50}
                  /> 


                                        {/* <div class="form-group mb-3 mt-3">
                                            <input id="aadharNo" type="text" placeholder="AADHAR Card Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div> */}
                                       
                                        {/* <div class="form-group mb-3 mt-3">
                                            <input id="phoneNo" type="text" placeholder="Phone Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3 mt-3">
                                            <input id="upiId" type="text" placeholder="UPI ID Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div> */}
                                        {/* <div class="form-group mb-3 mt-3">
                                            <input id="amountNeeded" type="text" placeholder="Amount Needed to Re-settle" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        
                                        <div class="form-group mb-3 mt-3">
                                            <input id="upiId" type="text" placeholder="UPI ID Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div> */}
                          
                                        <div class="text-center">
                                        <button type="submit" class="btn  btn-block text-uppercase mb-2  shadow-sm" style={{background:"#0095b6",color:"white"}}>Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        
      </div>
    </>
  );

}

export default AddStory;
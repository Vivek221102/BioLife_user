import Axios from "axios";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { TiLocationArrow } from "react-icons/ti";
function Footer(){

    let user = JSON.parse( sessionStorage.getItem("user_data"));
    var uid = user?user.id: null;

    const logout=()=>{
        sessionStorage.clear();
        window.location="/";
        }
// const [input, setinput] = useState(null);
// const [respo, setresp] = useState(['']);
       
    const [input, setinput] = useState(null);
    const [respo, setResp] = useState('');

    const sendquestion = (e) => {
        e.preventDefault(); 
        const conversation = document.getElementById("conversation");
        let msg = document.createElement("div");

        Axios.post("http://localhost:1121/api/checkques", { input:input })
            .then((response) => {
                let ans = response.data && response.data[0] ? response.data[0].ans : null;
                setResp(ans);

                msg.classList.add('chatbot-message', 'user-message');
                msg.innerHTML = `<p class="chatbot-text">${input}</p>`;
                conversation.appendChild(msg);

                if (ans === null) {
                    msg = document.createElement("div");
                    msg.classList.add("chatbot-message", "chatbot");
                    msg.innerHTML = `<p class="chatbot-text">Sorry, we could not find your response</p>`;
                    conversation.appendChild(msg);
                } else {
                    msg = document.createElement("div");
                    msg.classList.add("chatbot-message", "chatbot");
                    msg.innerHTML = `<p class="chatbot-text">${ans}</p>`;
                    conversation.appendChild(msg);
                }
                setinput('');
            })
            .catch(error => {
                console.error('Error fetching data:', error);

                // Display error message in conversation
                msg = document.createElement("div");
                msg.classList.add("chatbot-message", "chatbot");
                msg.innerHTML = `<p class="chatbot-text">Error: ${error.message}</p>`;
                conversation.appendChild(msg);
            });
    };

    return(
        <>
         <a class="btn-scroll-top"><i class="biolife-icon icon-left-arrow"></i></a> 
         
         
<footer id="footer" class="footer layout-02">

        <div class="footer-content background-footer-03" style={{ backgroundColor: "black"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <section class="footer-item">
                            <Link to="/" class="logo footer-logo">
                            
                            <img src="assets/images/logo-01/organic.png" alt="biolife logo" style={{width:"180px", height:"50px"}} /></Link>
                            
                            <div class="footer-phone-info mode-02">
                                <i class="biolife-icon icon-head-phone"></i>
                                <p class="r-info">
                                    <span style={{color:"white"}}>Got Questions ?</span>
                                    <span class="number" >+919313231486</span>
                                </p>
                            </div>
                            <div class="contact-info-block footer-layout simple-info">
                                <h4 class="title" style={{color:"white"}}>Contact info</h4>
                                <div class="info-item">
                                    <img src="assets/images/location-icon.png"alt="" class="icon"/>
                                    <p class="desc">Vadodara,Gujarat,india </p>
                                </div>
                            </div>
                           
                        </section>
                    </div>
                    <div class="col-lg-5 col-md-8 col-xs-12 lg-margin-top-14px md-margin-top-50px xs-margin-top-40px">
                        <div class="row">
                            <div class="col-lg-4 col-sm-4 col-xs-6">
                                <section class="footer-item">
                                    <h3 class="section-title" style={{color:"white"}}>My Account</h3>
                                    <div class="wrap-custom-menu vertical-menu-2 bigger">
                                        <ul class="menu">
                                            <li><Link to="/login" style={{textDecoration:"none"}}>Sign In</Link></li>
                                           
                                            {
                                                sessionStorage.getItem("user_data") == null ?
                                                
                                                <>
                                                <li><Link to="/login" style={{textDecoration:"none"}}>View Cart</Link></li>
                                                 <li><Link to="/login" style={{textDecoration:"none"}}>My Wishlist</Link></li>
                                                 <li><Link to="/login" style={{textDecoration:"none"}}>My Rewards</Link></li>
                                                </>
                                                :
                                                <>
                                              
                                            <li><Link to="/cart" style={{textDecoration:"none"}}>View Cart</Link></li>
                                            <li><Link to="/wishlist" style={{textDecoration:"none"}}>My Wishlist</Link></li>
                                            <li><Link to="/rewards" style={{textDecoration:"none"}}>My Rewards</Link></li>
                                                 </>
                                                 }
                                           
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-xs-12 sm-margin-top-0 xs-margin-top-40px">
                                <section class="footer-item">
                                    <h3 class="section-title" style={{color:"white"}}>Information</h3>
                                    <div class="wrap-custom-menu vertical-menu-2 bigger">
                                        <ul class="menu">
                                            <li><Link to="/about" style={{textDecoration:"none"}}>About Our Shop</Link></li>
                                            <li><Link to="#" style={{textDecoration:"none"}}>Secure Shopping</Link></li>
                                            <li><Link to="#" style={{textDecoration:"none"}}>Privacy Policy</Link></li>
                                            <li><Link to="/contect" style={{textDecoration:"none"}}>FAQs</Link></li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-xs-12 sm-margin-top-0 xs-margin-top-40px">
                                <section class="footer-item">
                                    <h3 class="section-title" style={{color:"white"}}>Product</h3>
                                    <div class="wrap-custom-menu vertical-menu-2 bigger">
                                        <ul class="menu">
                                        {
                                                sessionStorage.getItem("user_data") == null ?
                                                <> <li><Link to="/login" style={{textDecoration:"none"}}>Orders</Link></li></>
                                                :
                                                <> <li><Link to="/checkout" style={{textDecoration:"none"}}>Orders</Link></li></>
                                        }
                                           
                                            <li><Link to="/product" style={{textDecoration:"none"}}>Products</Link></li>
                                            <li><Link to="/cart" style={{textDecoration:"none"}}>Customers</Link></li>
                                            <li><Link to="/contect" style={{textDecoration:"none"}}>Feed Back</Link></li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>                          
               <div class="footer-midle-pst v2">
               <div class="biolife-social inline circle-hover">
                                <ul class="socials">
                                    <li><Link to="#" title="twitter" class="socail-btn"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#" title="facebook" class="socail-btn"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#" title="youtube" class="socail-btn"><i class="fa fa-youtube" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#" title="instagram" class="socail-btn"><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                    <div class="wrap-custom-menu horizontal-menu-v2">
                        <ul class="menu">
                            <li><Link to="/contect" style={{textDecoration:"none"}}> Contact us</Link></li>
                            <li><Link to="/about" style={{textDecoration:"none"}}>About us</Link></li>
                            <li><Link to="#" style={{textDecoration:"none"}}>Investor relations</Link></li>
                            <li><Link to="#" style={{textDecoration:"none"}}>Customer services</Link></li>
                          </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    <div class="mobile-footer">
        <div class="mobile-footer-inner">
            
            {/* <div class="mobile-block block-menu-main">
                <Link class="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu-opened" to="javascript:void(0)">
                    <span class="fa fa-bars"></span>
                    <span class="text">Menu</span>
                </Link>
            </div> */}
            <div class="mobile-block block-global">
                                <a class="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="javascript:void(0)">
                                    <span class="fa fa-bars"></span>
                                    <span class="text"></span>
                                    <span class="text"></span>
                                    <span class="text">Menu</span>  
                                </a>
                                </div>
        
{
    sessionStorage.getItem("user_data") == null ?
    <>
    <div class="mobile-block block-minicart">
                <Link class="link-to-cart" to="/login">
                    <span class="fa fa-shopping-bag" aria-hidden="true"></span>
                    <span class="text">Cart</span>
                </Link>
            </div>
    </>
    :
    <>
    <div class="mobile-block block-minicart">
                <Link class="link-to-cart" to="/cart">
                    <span class="fa fa-shopping-bag" aria-hidden="true"></span>
                    <span class="text">Cart</span>
                </Link>
            </div>
    </>
}
            

        </div>
    </div>
    <div class="mobile-block-global" style={{backgroundColor:"whitesmoke",visibility:"visible"}}>
        <div class="biolife-mobile-panels">
            <span class="biolife-current-panel-title"><Link to="/" class="biolife-logo"><img src="assets/images/logo-01/organic-2-footer.png" alt="biolife logo" style={{width:"140px", height:"40px"}}/></Link>
            </span>
            <Link class="biolife-close-btn" data-object="global-panel-opened" style={{textDecoration:"none"}}>&times;</Link>
        </div>
        <div class="block-global-contain">
            <div class="glb-item my-account">
                <b class="title">My Account</b>
                <ul class="list">
                    <li class="list-item"> { sessionStorage.getItem("user_data") == null ?
                                <>
                                <Link class="login-link" to="/login" style={{textDecoration:"none", marginBottom:"3px"}}><i class="biolife-icon icon-login"></i>LogIn/Signup</Link><br/>
                                
                                <li class="list-item"> <Link to="/login" class="link-to" style={{marginTop:"8px"}}>
                                                     <span class="icon-qty-combine">
                                                              <i class="icon-heart-bold biolife-icon"></i>
                                                     </span>
                                                     <span class="list-item"> My Whishlist</span>  
                                                </Link></li>
                                             
                                            
                                            
                                            <Link to="/login" style={{marginTop:"8px"}}> <img src=".\assets\images\trophy.svg" style={{width: "20px", height:"25px"}}></img><span class="list-item"> My Rewards</span></Link>                        </>
                                :
                                <>
                                <div class="minicart-block">
                                <div class="minicart-contain">
                                    <span class="link-to">
                                    <span class="list-item" style={{display:"flex",gap:"10px",marginLeft:"90px"}}>
                                    <i class="biolife-icon icon-login"></i>
                                    <span class="title" style={{color:"#90bf2a",fontFamily:"cursive"}}>{user.name} </span></span>
                                   </span>
                                    <div class="cart-content">
                                        <div class="cart-inner">
                                               <p class="btn-control" >
                                                 <Link to="/myprofile" class="btn view-cart" style={{backgroundColor:"transparent",border:"2px solid gray"}}>Your Profile</Link>
                                                 <li class="list-item"> <Link to="/wishlist" class="link-to">
                                                     <span class="icon-qty-combine">
                                                              <i class="icon-heart-bold biolife-icon"></i>
                                                     </span>
                                                     <span class="list-item"> My Wishlist</span> (5)  
                                                </Link></li>
                                                  {/* <div style={{display:"flex",gap:"5px",marginLeft:"90px"}}>  <span class="icon-qty-combine">
                                                <i class="icon-cart-mini biolife-icon"></i>
                                                <span class="qty" id="cartCount">{totalCount}</span>
                                            </span>
                                            <Link to="/cart"> <span class="list-item">My Cart</span></Link> (2)
                                            </div>  */}
                                            <Link to="/rewards " > <img src=".\assets\images\trophy.svg" style={{width: "20px", height:"25px",marginLeft:"5px"}}></img><span class="list-item"> My Rewards</span></Link>         

                                    </p>
                                        </div>
                                    </div>
                                    </div></div>
                                </>
                            }</li>
                </ul>
            </div>
            <div class="glb-item currency">
                <b class="title">Main Modules</b>
                <ul class="list">
                <li class="menu-item"><Link to="/" style={{textDecoration:"none",color:"#90bf2a"}} >Home</Link></li>

                <li class="menu-item"><Link to="/product" style={{textDecoration:"none"}}>Products</Link></li>

                <li class="menu-item menu-item-has-children ">
                <Link to="/contect" style={{textDecoration:"none"}}>Contact</Link>
                </li>
                <li class="menu-item menu-item-has-children ">
                <Link to="/about" style={{textDecoration:"none"}}>Aboutus</Link>
                </li>
                </ul>
            </div>
            <div class="glb-item languages">
                <b class="title"></b>

                <ul class="list inline">
                { sessionStorage.getItem("user_data") == null ?
                                <>  </> 
                                 :
                                <> <Link to="/" class="btn view-cart" style={{backgroundColor:"#90bf2a",color:"white",borderRadius:"10px",marginTop:"10px"}} onClick={logout}>Log Out</Link></>
                            }

                </ul>

            </div>
        </div>
    </div>
    <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: "9999" }}>
                <button
                    style={{
                        backgroundColor: "#90bf2a",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        fontSize: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        // Add functionality for FAQ button click (open chatbot)
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    ?
                </button>
            </div>
            <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"

        // style={{width:"500px", height}}
      >
        {/* <div class="modal-dialog" role="document"> */}
          {/* <div class="modal-content"> */}
            {/* <div class="modal-header"> */}
              
             
            {/* </div> */}
            {/* <div class="modal-body"> */}
            <div class="footer-content">
    <div class="container">
        <div class="row">
        <div class="chatbot-container container row" style={{width:"380px",borderRadius:"12px",border:"2px solid"}}>
                <div id="header" style={{backgroundColor:"#90bf2a",borderRadius:"12px",color:"white",fontWeight:"bold"}}>
                  <h1>BIOCHAT </h1>
                  <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
                <div id="chatbot">
                  <div id="conversation">
                    <div class="chatbot-message">
                      <p class="chatbot-text">Hi! 👋 it''s great to see you!</p>
                    </div>
                  </div>
                  <form id="input-form">
                    <message-container>
                      <input
                        id="input-field"
                        type="text"
                        placeholder="Type your message here"
                        value={input}
                        onChange={(e)=>setinput(e.target.value)}
                      />
                      <button id="submit-button" type="submit" style={{backgroundColor:"#90bf2a",color:"white",width:"80px",height:"35px",borderRadius:"40px"}} onClick={(e)=>sendquestion(e)} >
                      <TiLocationArrow style={{height: "2em",width: "5em"}} /> {/* <img class="send-icon" src="send-message.png" alt="send" /> */}
                      </button>
                    </message-container>
                  </form>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
        </div>
    </div>
</div>
             
        </>
    )
}export default Footer

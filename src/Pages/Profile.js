import React from "react";
import UserReservations from "../Components/UserComponents/UserReservations";
import { Col } from 'react-bootstrap'

const  Profile =()=> {
    
    return (
      <>
        <h1>Twój Profil</h1>
        <div>
          <h1> Witaj Użytkowniku</h1>
        </div>
        <br />
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src="http://www.ewa.bicom.pl/ptaki/images/fot_kaczka.jpg"
          alt="profile pic"
        />
        <p>Rezerwacje</p>
       <Col>
        <UserReservations/>
       </Col>
       
      </>
    );
  }

export default Profile;

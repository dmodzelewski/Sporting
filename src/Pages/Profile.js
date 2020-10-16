import React from "react";
import UserReservations from "../Components/UserComponents/UserReservations";
import { Col } from 'react-bootstrap'
import { gql, useQuery } from "@apollo/client";
import PropTypes from "prop-types";

const  Profile =(props)=> {
  
  const userInfo = gql`
  query{
    userByEmail(loginEmail:"${localStorage.getItem("email")||props.location.state.passEmail}"){
      firstName
      lastName
      birthDate
      role
      registeredDate
    }
  }
`;

const { loading, error, data } = useQuery(userInfo);
    if (loading) return <p className="search-filter-city">Loading...</p>;
    if (error) return `Error! ${error.message} `;
    
    console.log(data.userByEmail.firstName + " " + data.userByEmail.lastName + " " + data.userByEmail.birthDate+ " " + data.userByEmail.role + " " +  data.userByEmail.registeredDate) 

      
    return (
      <>
        <h1>Twój Profil</h1>
        <div>
          <h1> Witaj {data.userByEmail.firstName + " " + data.userByEmail.lastName } </h1>
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
  Profile.propTypes = {
    location: PropTypes.object.isRequired,
  };

  
export default Profile;

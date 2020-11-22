import React, { useState } from 'react';
import Header from '../components/Header';
import { Col, Row, Container } from "../components/Grid";


export default function Contact() {
  return(
    <Container>
      <Header headerName={"Contact Me"} subLine={"Let's Work Together"}/>
 
    </Container>
  )
}// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">    <link rel="stylesheet" href="assets/style.css">
//     <link rel="stylesheet" href="assets/style.css">
//     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>    
    
//     <title>Chris Parker - Web Developer | Home</title>
// </head>

// <body>
// <!-- Navbar  -->
//   <nav class="navbar navbar-expand-sm navbar-dark bg-dark">        
//     <a class="navbar-brand" href="index.html">Chris Parker</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarMenu">
//         <div class="navbar-nav ml-auto">
//         <a class="nav-item nav-link" href="index.html">Home</a>
//         <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
//         <a class="nav-item nav-link active" href="contact.html">Contact <span class="sr-only">(current)</span></a>
//       </div>
//     </div>
//   </nav>
// <!-- End of Navbar -->

// <!-- Contact Section -->
//   <div class="container mt-3">
//     <div class="row">
//       <div class="col-sm-4">
//         <h4>Contact</h4>
//       </div>
//     </div>
//     <hr>

//     <div class="row">
//       <div class="col-sm-8">
//         <form>
//           <!-- First and last name -->
//           <div class="form-group">
//             <label for="contactName">Name</label>
//             <input type="name" class="form-control" id="contactName" placeholder="First and last name">
//           </div>
//           <!-- Email -->
//           <div class="form-group">
//             <label for="inputEmail">Email</label>
//             <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
//             <small class="form-text text-muted">I'll never share your email with anyone else.</small>
//           </div>
//           <!-- Message -->
//           <div class="form-group">
//             <label for="messageArea">Message</label>
//             <textarea class="form-control" id="messageArea" rows="3" placeholder="Questions? Have a fun project in mind? Leave your details!"></textarea>
//           </div>
//           <!-- Submit button -->
//           <button type="submit" class="btn btn-primary">Submit</button>
//         </form>
//       </div>
//       <div class="col-sm-4">
//         <p>Feel free to reach me at the following:</p>
//         <ul>
//           <li><a href="tel:206-643-0293">206.643.0293</a></li>
//           <li><a href = "mailto: ctp7313@gmail.com">CTP7313@gmail.com</a></li>
//           <li><a href="https://www.linkedin.com/in/chrs-prkr/" target="_blank">LinkedIn</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>


// <!-- Footer -->
// <footer id="footer">
// </footer>

// </body>
// </html>
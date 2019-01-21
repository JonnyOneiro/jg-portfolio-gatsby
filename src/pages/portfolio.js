import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Layout from '../templates/layout';



class PortfolioPage extends React.Component {
   render() {
      return (
         <Layout>
            <h1>Big oops.</h1>
            <p>You've hit a route that doesn't exist.</p>
            <p>Go back to the home page here!</p>
            <Link to="/">
               <button>To Home Page</button>
            </Link>          
         </Layout>
      );
   }
}

export default PortfolioPage;
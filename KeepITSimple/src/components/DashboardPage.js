import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


const DashboardPage = () => (
  <div>
    <Header></Header>
    <div>
      <Link to ="/processBoard" > Página de Processos </Link>
      <Link to ="/followUpPage" > Follow Ups </Link>
      <Link to ="/candidateBoard" > Candidatos </Link><button>Candidatos</button>
    </div>
  </div>
);

export default DashboardPage;

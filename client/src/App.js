
import React from 'react';
import Home from "./pages/home";
import CategoriePage from "./pages/categoriePages";
import Artisan from "./pages/ficheArtisan";
import NotFound from "./pages/404";

import NavBar from "./components/NavBar";
import SearchBar from "./components/searchBar";
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// ✅ Importation du fichier CSS pour le style global

import './styles/App.scss';


const App = () => {
  return (
    <div className="BodyContainer">
      <header>
        <NavBar />
        <SearchBar />
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path="/artisan/:nom" element={<Artisan />} />
        <Route path="/categories/:nom_categorie" element={<CategoriePage />} />
        {/* ✅ Route 404 : Si aucune route ne correspond */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;


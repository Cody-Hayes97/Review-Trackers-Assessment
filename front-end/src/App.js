import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { ReviewList } from './components/ReviewList';
import { AppContainer } from './styles/app-styles';
import { Routes, Route, Link } from "react-router-dom";
import { SelectedReview } from './components/SelectedReview';

function App() {
  const reviews = useSelector((state) => state.reviews.reviews)
  return (
    <AppContainer>
     <Header />
     <Routes>
     <Route exact path="/" element={<ReviewList/>}/>
     <Route path="/review/:id" element={<SelectedReview review={reviews}/>} />
     </Routes>
    </AppContainer>
  );
}

export default App;

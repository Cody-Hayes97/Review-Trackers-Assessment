import React from 'react';
import { Header } from './components/Header';
import { ReviewList } from './components/ReviewList';
import { AppContainer } from './styles/app-styles';

function App() {
  return (
    <AppContainer>
     <Header />
     <ReviewList />
    </AppContainer>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SummaryForm from './pages/summary/SummaryForm';

export default function RoutesFile () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SummaryForm />} exact />
        {/* <Route path="/register" component={Register} exact /> */}
      </Routes>
    </Router>
  )
}

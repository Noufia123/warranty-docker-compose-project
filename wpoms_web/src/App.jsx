import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRoutes from './routes/index';

function App() {
  return (
    <Router>
       <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
         CI/CD Pipeline Active - Latest Deployment Successful
      </div>


      <Toaster position="bottom-right" richColors />
      <AppRoutes />
    </Router>
  );
}

export default App;

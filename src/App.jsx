import React from 'react';
import MyIntegration from './Pages/MyIntegration/myIntegration.jsx';
import MyQuestions from './Pages/MyQuestions/myQuestions.jsx';
import MyTestimonials from './Pages/MyTestimonials/myTestimonials.jsx';
import MyNewsletter from './Pages/MyNewsletter/myNewsletter.jsx';
import MyWorkflow from './Pages/MyWorkflow/myWorkflow.jsx';
import MyFooter from './Pages/MyFooter/myFooter.jsx';



function App() {
  return (
    <div>
      <MyIntegration  />
      <MyTestimonials />
      <MyQuestions    />
      <MyNewsletter   />
      <MyWorkflow     />
      <MyFooter       />

    </div>
  );
}

export default App;
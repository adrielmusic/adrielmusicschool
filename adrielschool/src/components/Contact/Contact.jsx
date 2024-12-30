import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import UserForm from './Steps/UserForm'
import CourseForm from './Steps/CourseForm'
import SubmitForm from './Steps/SubmitForm'


const Contact = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Personal Details","Courses","Complete"];

  const displayStep  = (step) =>{
    switch(step){
      case 1:
        return <UserForm/>
        case 2:
          return <CourseForm/>
          case 3:
            return <SubmitForm/>
            default:
    }
  }

  const handleClick = (direction) =>{

    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds

    newStep > 0 && newStep < steps.length && setCurrentStep(newStep);

  }

return (
  <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
  <div className='container mt-5'>
  {/* Stepper */}
  <Stepper
   steps={steps}
   currentStep={currentStep}
  />
  </div>

  {/* Navigation Control */}
  <StepperControl
  handleClick = {handleClick}
  currentStep = {setCurrentStep}
  steps = {steps}
  />
</div>
)
}

export default Contact
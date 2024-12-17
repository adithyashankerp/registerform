import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './App.css'

function App() {
  
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    qualification: '',
    skill: '',
  });
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [emailError, setEmailError] = useState(''); // State for email validation error
  const [phoneError, setPhoneError] = useState(''); // State for phone validation error
  
  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }

    // Phone validation (10-digit number)
    if (name === 'phone') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setPhoneError('Please enter a valid 10-digit phone number.');
      } else {
        setPhoneError('');
      }
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      <div className='text-center justify-content-center align-item-center mt-3 ' >
        {submitted && (
          alert("form submitted succesfully")
        )}
        
        <h1>Register Form</h1>
        
        <div className='text-center justify-content-center'>
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
          {/* Name Field */}
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          {/* DOB Field */}
          <Form.Group className='mb-3' controlId='formDob'>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type='date'
              name='dob'
              value={formData.dob}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Gender Field */}
          <Form.Group className='mb-3' controlId='formGender'>
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                type='radio'
                label='Male'
                name='gender'
                value='Male'
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                type='radio'
                label='Female'
                name='gender'
                value='Female'
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                type='radio'
                label='Other'
                name='gender'
                value='Other'
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Phone Field */}
          <Form.Group className='mb-3' controlId='formPhone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='tel'
              placeholder='Enter your phone number'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!phoneError}
            />
            <Form.Control.Feedback type='invalid'>
              {phoneError}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email Field */}
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type='invalid'>
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Qualification Field */}
          <Form.Group className='mb-3' controlId='formQualification'>
            <Form.Label>Qualification</Form.Label>
            <Form.Select
              name='qualification'
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value=''>Select your qualification</option>
              <option value='B.Tech'>B.Tech</option>
              <option value='BCA'>BCA</option>
              <option value='B.Com'>B.Com</option>
              <option value='BBA'>BBA</option>
              <option value='B.Sc Computer Science'>B.Sc Computer Science</option>
            </Form.Select>
          </Form.Group>

          {/* Skill Field */}
          <Form.Group className='mb-3' controlId='formSkill'>
            <Form.Label>Skill</Form.Label>
            <div>
              <Form.Check
                inline
                type='radio'
                label='HTML'
                name='skill'
                value='HTML'
                checked={formData.skill === 'HTML'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                type='radio'
                label='CSS'
                name='skill'
                value='CSS'
                checked={formData.skill === 'CSS'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                type='radio'
                label='JavaScript'
                name='skill'
                value='JavaScript'
                checked={formData.skill === 'JavaScript'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                type='radio'
                label='React'
                name='skill'
                value='React'
                checked={formData.skill === 'React'}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Submit Button */}
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        </div>

      </div>
    </>
  )
}

export default App

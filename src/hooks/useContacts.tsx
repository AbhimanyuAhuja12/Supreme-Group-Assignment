import { useState } from 'react';

interface FormValues {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const useContact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        if (!isValidEmail(value)) return 'Invalid email address';
        return '';
      case 'company':
        return value.trim() === '' ? 'Company is required' : '';
      case 'message':
        return ''; 
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    }
    
    if (formStatus && formStatus.includes('successfully')) {
      setFormStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const errors: FormErrors = {
      fullName: validateField('fullName', formValues.fullName),
      email: validateField('email', formValues.email),
      company: validateField('company', formValues.company),
      message: validateField('message', formValues.message),
    };
    
    const hasErrors = Object.values(errors).some(error => error !== '');
    
    if (hasErrors) {
      setFormErrors(errors);
      setFormStatus(null);
      return;
    }
    
    setFormErrors({
      fullName: '',
      email: '',
      company: '',
      message: '',
    });
    
    setIsLoading(true); 
    setFormStatus(null);

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      
      setFormStatus('Your message has been sent successfully.');
      setIsLoading(false);
      
      // Reset form
      setFormValues({
        fullName: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setIsLoading(false);
      setFormStatus('Something went wrong, please try again.');
    }
  };

  return {
    formValues,
    formErrors,
    formStatus,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
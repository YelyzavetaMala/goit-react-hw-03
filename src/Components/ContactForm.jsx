import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    onAdd({ id: Date.now(), ...values });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <p>Name</p>      
          <Field type="text" name="name" placeholder="" />
          <ErrorMessage name="name" component="div" className="error" />
          
          <p>Number</p>  
          <Field type="tel" name="number" placeholder="" />
          <ErrorMessage name="number" component="div" className="error" />
          
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}


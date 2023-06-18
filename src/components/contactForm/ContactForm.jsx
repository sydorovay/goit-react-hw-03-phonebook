import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { FcBusinessContact, FcCellPhone } from 'react-icons/fc';

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я ]+$/,
        'Invalid name format. Name must contain only letters.'
      )
      .min(2, 'Name must be at least 2 characters long')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .min(6, 'Phone number must be at least 6 digits')
      .max(14, 'Phone number can have a maximum of 14 digits')
      .required('Phone number is required'),
  });

  handleSubmit = (values, { resetForm }) => {
    this.props.addContact(values.name, values.number);
    resetForm();
  };

  render() {
    return (
      <div className={styles.container}>
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <label className={styles.inputLabel}>
              <FcBusinessContact size={24} />
              Name:
              <Field
                className={styles.inputField}
                type="text"
                name="name"
                title="Name may contain only letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
                style={{ color: 'red' }}
              />
            </label>
            <br />
            <label className={styles.inputLabel}>
              <FcCellPhone size={24} />
              Number:
              <Field
                className={styles.inputField}
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </label>
            <br />
            <button className={styles.submitButton} type="submit">
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;

import * as React from 'react';
import { useState } from 'react';
import * as Cookies from 'js-cookie';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { ModalTypes } from '../utils/types';

const schema = yup.object().shape({
  username: yup.string().required('Required Field'),
  email: yup.string().email('Invalid Email').required('Required Field'),
});

interface FormValues {
  username: string;
  email: string;
}

const Index = ({ isOpen, onClose }: ModalTypes) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            validationSchema={schema}
            onSubmit={(values: FormValues, actions) => {
              Cookies.set('user', JSON.stringify(values), {
                expires: 0.0416667,
              });
              window.location.reload();
            }}
            initialValues={{
              username: '',
              email: '',
            }}>
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={errors.username != undefined}>
                  <FormLabel>Username:</FormLabel>
                  <Input
                    name='username'
                    onChange={handleChange}
                    placeholder='Username'
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={errors.email != undefined}>
                  <FormLabel>Email:</FormLabel>
                  <Input
                    name='email'
                    onChange={handleChange}
                    placeholder='Email'
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <ModalFooter>
                  <Button
                    colorScheme='blue'
                    mr={3}
                    data-testid='login-button'
                    type='submit'>
                    Log In
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Index;

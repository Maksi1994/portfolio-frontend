import {Button, Container, Form} from 'react-bootstrap';
import {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { signIn } from "next-auth/react"
import {useRouter} from 'next/router';
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';
import Head from 'next/head'

export default function SignIn() {
   const [wasSubmitted, setSubmitting] = useState(false);
   const router = useRouter();
   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: yup.object({
         email: yup.string().email().required(),
         password: yup.string().min(6).required(),
      }),
      onSubmit: values => {
         signIn('credentials', values).then(() => {
            router.push('/backend');
         });
      },
   });

   const onSubmit = (e) => {
      setSubmitting(true);
      formik.handleSubmit(e);
   };

   return <Container className="mt-5">
      <Head>
         <title>Sign In</title>
      </Head>
      <h1 className="text-center">Sign In</h1>
      <Form className="w-50 mt-5 mx-auto" noValidate onSubmit={(e) => onSubmit(e)}>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"
                          isInvalid={wasSubmitted ? formik.errors.email : null}
                          {...formik.getFieldProps('email')} />
            <Form.Control.Feedback type="invalid">
               Please type a email.
            </Form.Control.Feedback>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          placeholder="Password"
                          name="password"
                          isInvalid={wasSubmitted ? formik.errors.password : null}
                          {...formik.getFieldProps('password')} />
            <Form.Control.Feedback type="invalid">
               Please type a password.
            </Form.Control.Feedback>
         </Form.Group>

         <Button variant="primary" className="ms-auto d-table" type="submit">
            Submit
         </Button>
      </Form>
   </Container>
}


export async function getServerSideProps(context) {
   const session = await unstable_getServerSession(
     context.req,
     context.res,
     authOptions
   );

   if (!!session) {
      return {
         redirect: {
            permanent: false,
            destination: "/"
         }
      }
   }

   return {
      props: {}
   }
}

import * as yup from 'yup';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Formik, FormikProps } from 'formik';

import { useAuth } from '../hooks/auth';

import Header from '../components/Header';
import Input from '../components/Input';
import Tooltip from '../components/Tooltip';
import { ButtonLogin } from '../components/Button';

import { Container, Content } from '../styles/pages/index';

type SignInFormData = {
  email?: string;
  password?: string;
};

const Home: NextPage = () => {
  const router = useRouter();

  const { signIn, signOut, getRefreshToken } = useAuth();
  const [isVisibleMessageError, setIsVisibleMessageError] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(
    'Email e/ou senha incorretos.',
  );

  const loginSchema = yup.object({
    email: yup.string().email('Email inválido').required('Email Obrigatório.'),
    password: yup.string().required('Senha Obrigatória.'),
  });

  const handleValidate = (
    props: FormikProps<{
      email: string;
      password: string;
    }>,
  ) => {
    setIsVisibleMessageError(true);
    props.errors.email && setErrorMessage(props.errors.email);
    props.errors.password && setErrorMessage(props.errors.password);

    props.errors.password &&
      props.errors.email &&
      setErrorMessage('Campos Obrigatórios');
  };

  const handleSignIn = async (values: SignInFormData) => {
    setIsVisibleMessageError(false);

    try {
      if (values.email && values.password) {
        await signIn({
          email: values.email,
          password: values.password,
        });

        router.push('/home');
      }
    } catch (err) {
      setIsVisibleMessageError(true);
      setErrorMessage('Email e/ou senha incorretos.');
    }
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        await getRefreshToken();
        router.push('/home');
      } catch (error) {
        signOut();
      }
    }

    checkLogin();
  }, [getRefreshToken]);

  return (
    <Container>
      <Content>
        <Header />

        <Formik
          validateOnBlur={false}
          validationSchema={loginSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            handleSignIn(values);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit} noValidate>
              <Input
                type="email"
                label="Email"
                name="email"
                onBlur={props.handleBlur('email')}
                onChange={props.handleChange('email')}
                value={props.values.email}
              />

              <Input
                type="password"
                label="Senha"
                name="password"
                onBlur={props.handleBlur('password')}
                onChange={props.handleChange('password')}
                value={props.values.password}
              />

              <ButtonLogin
                type="submit"
                label="Entrar"
                onClick={() => {
                  if (!props.isValid) {
                    handleValidate(props);
                  } else {
                    props.handleSubmit();
                  }
                }}
                isDisabled={props.isSubmitting}
              />

              <Tooltip label={errorMessage} isVisible={isVisibleMessageError} />
            </form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Home;

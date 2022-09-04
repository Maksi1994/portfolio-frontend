import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from "next-auth/react"
import AuthLayout from '../layouts/AuthLayout';
import '../app.scss';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return   <SessionProvider session={session}>
        {Component.auth ? (
          <AuthLayout>
              <Component {...pageProps} />
          </AuthLayout>
        ) : (
          <Component {...pageProps} />
        )}
    </SessionProvider>
}

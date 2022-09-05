import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from "next-auth/react"
import AuthLayout from '../layouts/AuthLayout';
import '../app.scss';
import { HTML5Backend } from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return   <SessionProvider session={session}>
        <DndProvider backend={HTML5Backend}>
            {Component.auth ? (
              <AuthLayout>
                  <Component {...pageProps} />
              </AuthLayout>
            ) : (
              <Component {...pageProps} />
            )}
        </DndProvider>
    </SessionProvider>
}

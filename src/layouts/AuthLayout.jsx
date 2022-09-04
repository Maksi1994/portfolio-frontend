import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {Spinner} from 'react-bootstrap';

export default  function AuthLayout({ children }) {
   const router = useRouter();
   const { status } = useSession({
      required: true,
      onUnauthenticated() {
         router.push('/sign-in')
      },
   });

   if (status === "loading") {
      return <div className="py-5 d-flex justify-content-center">
         <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
         </Spinner>
      </div>
   } else if (status === 'authenticated') {
      return children
   }
}

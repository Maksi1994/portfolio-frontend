import {Container, Nav, Navbar} from 'react-bootstrap';
import Link from 'next/link'
import {useRouter} from 'next/router';
import {Button} from 'react-bootstrap';
import { useSession, signOut } from "next-auth/react"

export default function BackendHeader() {
   const router = useRouter();
   const navigation = [
      {
         label: 'General Info',
         href: '/backend/general-info'
      },
      {
         label: 'Skills',
         href: '/backend/skills'
      }
      ];
   const { data: session } = useSession();

   const onSingOut = () => {
      signOut().then(() => {
         router.push('/');
      });
   }

   return (
     <Navbar bg="light" expand="lg">
        <Container>
           <Link href="/backend">
              <h5 className="m-0"> Content Editor</h5>
           </Link>

           <Navbar.Collapse className="ms-5">
              <Nav className="me-auto">
                 {
                    navigation.map(item => {
                       return <Link key={item.label} href={item.href} passHref>
                          <Nav.Link active={item.exact ? router.pathname === item.href : router.pathname.startsWith(item.href)}>{item.label}</Nav.Link>
                       </Link>
                    })
                 }

              </Nav>

              {
                 session && <Button className="d-table ms-auto" onClick={onSingOut}>Sign Out</Button>
              }
           </Navbar.Collapse>
        </Container>
     </Navbar>
   );
}

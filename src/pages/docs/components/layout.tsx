import { Container } from '@mui/material';

// ----------------------------------------------
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return <Container maxWidth="md">{children}</Container>;
}

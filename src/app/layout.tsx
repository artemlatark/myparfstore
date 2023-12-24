import type {Metadata, NextPage} from 'next';

import {Container, Stack} from '@mui/material';

import ThemeRegistry from '@/config/ThemeRegistry';

import {Header, Footer} from '@/components/common';

import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout: NextPage<RootLayoutProps> = ({children}) => {
  return (
    <html lang="ru">
      <body>
        <ThemeRegistry options={{key: 'mui'}}>
          <Container sx={{minHeight: '100vh'}}>
            <Stack sx={{minHeight: '100vh'}}>
              <Header />
              {children}
              <Footer />
            </Stack>
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

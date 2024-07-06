import '@mantine/core/styles.css';
import { createTheme, ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

const theme = createTheme({
  defaultRadius: 'md',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme='light'>{children}</MantineProvider>
      </body>
    </html>
  );
}
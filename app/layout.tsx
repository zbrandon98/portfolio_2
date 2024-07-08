import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: "Brandon's Portfolio",
  description: 'Welcome and please take a loot at my projects :)',
};


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
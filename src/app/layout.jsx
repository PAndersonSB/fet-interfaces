export const metadata = {
  title: "FET Editor",
  description: "Editor de horários estilo FET",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
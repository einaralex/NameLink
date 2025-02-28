export const metadata = {
  title: "NameLink",
  description: "Get address names",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ margin: "0px", backgroundColor: "#2d2d2d", color: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}

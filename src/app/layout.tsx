import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leadster",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}

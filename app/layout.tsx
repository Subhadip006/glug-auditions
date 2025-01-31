// app/layout.tsx
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/navbar';
import './globals.css'; // ⚠️ Missing CSS import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
import '../globals.css';
import Header from '@/components/layout/Header';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true} className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}

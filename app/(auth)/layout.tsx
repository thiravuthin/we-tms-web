export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}
import "@/app/styles/ks_bootstrap.css"
import "@/app/styles/globals.css"
import "@/app/styles/we-tms.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthLayout } from "@/app/components/layout";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AuthLayout>
                    {children}
                </AuthLayout>
            </body>
        </html>
    )
}

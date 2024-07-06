import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { sessionClaims } = auth();

    if (sessionClaims?.metadata?.onboardingComplete) {
        return redirect("/organization");
    }

    return (
        <>{children}</>
    );
}
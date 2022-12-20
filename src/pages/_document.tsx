import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Copa</title>
                <link rel="icon" type="image/x-icon" href="../assets/logo.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Play:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body className="bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
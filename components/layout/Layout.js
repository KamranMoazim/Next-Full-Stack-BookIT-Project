import React from 'react';
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

function Layout({children, title="Book Best Hotels for your Holidays."}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                < meta charSet="utf-8" />
            </Head>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout

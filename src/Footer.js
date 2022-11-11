import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="text-center">
            © {year} GuruDayal. All Rights Reserved | Terms And Conditions
            </footer>
        </>
    )
}
export default Footer;
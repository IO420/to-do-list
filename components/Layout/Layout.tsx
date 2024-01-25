import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }: {children:ReactNode} ) {
  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
    <Header/>
    <main style={{flex: 1, background: "#F0FFF0"}}>{children}</main>
    <Footer/>
    </div>
  )
}

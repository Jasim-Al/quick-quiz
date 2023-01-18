import "./global.css";
import { Poppins } from "@next/font/google";
import classes from "./layout.module.css";
import ContextProvider from "./components/ContextProvider/ContextProvider";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head />
      <body className={classes.body}>
        <header>
          <h1 className={classes.title}>QUICK QUIZ</h1>
        </header>
        <Suspense fallback={<Loading />}>
          <ContextProvider>
            <main className={classes.main}>{children}</main>
          </ContextProvider>
        </Suspense>
        <footer>
          <h4 className={classes.footerTitle}>Designed by ID</h4>
        </footer>
      </body>
    </html>
  );
}

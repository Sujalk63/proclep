"use client";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }:any) {
  return (
    <Provider store={store}>
      <div className={inter.className}>{children}</div>
    </Provider>
  );
}

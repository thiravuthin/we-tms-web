import { AuthLayout } from '@/components/layout'
import React, { PropsWithChildren } from 'react'
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import "@/style/ks_bootstrap.css";
import "@/style/globals.css";
import "@/style/we-tms.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = async ({ children }: PropsWithChildren) => {
  return (
      <html lang="en">
          <body>
              <AuthLayout>
                  <div className="ks_w100 ks_d_flex ks_alg_itm_strect ks_jt_cont_spc_around">
                      <div className="ks_h100vh ks_col2 ks_brd_rgt ks_sb_bg_clr">
                          <Sidebar/>
                      </div>
                      <div className="ks_col10 ks_wht_bg_clr ks_d_flex ks_flex_col ks_h100vh">
                          <Navbar/>
                          {children}
                      </div>
                  </div>
              </AuthLayout>
          </body>
      </html>
  )
}

export default Layout
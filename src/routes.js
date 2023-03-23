import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import DashboardLayout from "src/layouts/DashboardLayout";
import LoginLayout from "src/layouts/LoginLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: LoginLayout,
    component: lazy(() => import("src/views/pages/Home/auth/Login/index")),
  },

  {
    exact: true,
    path: "/forget-password",
    layout: LoginLayout,

    component: lazy(() =>
      import("src/views/pages/Home/auth/forget-password/index")
    ),
  },

  {
    exact: true,
    path: "/reset-password",
    layout: LoginLayout,

    component: lazy(() =>
      import("src/views/pages/Home/auth/reset-password/index")
    ),
  },
  // {
  //   exact: true,
  //   path: "/verify-otp",
  //   layout: HomeLayout,

  //   component: lazy(() =>
  //     import("src/views/pages/Home/auth/Verify-Otp/VerifyOtp")
  //   ),
  // },
  {
    exact: true,
    path: "/dashboard",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Dashboard")),
  },
  {
    exact: true,
    path: "/card-management",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/CardManagement/Card")),
  },
  {
    exact: true,
    path: "/agency-management",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/AgencyMangement")),
  },
  {
    exact: true,
    path: "/terms-condition",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/StaticContentManagement/Termcondition")),
  },
  {
    exact: true,
    path: "/tutorial-management",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/StaticContentManagement/StaticView")),
  },
  {
    exact: true,
    path: "/Card-view",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/CardManagement/CardView")),
  },
  {
    exact: true,
    path: "/QRcode",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/QRcode/QRcode")),
  },

  {
    exact: true,
    path: "/reward-management",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Reward/Reward")),
  },
  {
    exact: true,
    path: "/notification-view",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/NotificationManagement/NotificationView")),
  },
  {
    exact: true,
    path: "/notification-edit",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/NotificationManagement/NotificationEdit")),
  },
  {
    exact: true,
    path: "/agency-view", 
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/AgencyMangement/Agencyview")),
  },
  {
    exact: true,
    path: "/fund-view",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/FundTransfer/FundView")),
  },
  {
    exact: true,
    path: "/viewUtility",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/UtilityManagement/ViewUtility")),
  },
  {
    exact: true,
    path: "/utility-service",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/UtilityManagement/UtilityService")),
  },
  {
    exact: true,
    path: "/reward-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Reward/ViewReward")
    ),
  },

  {
    exact: true,
    path: "/loan-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/LoanManagement/Loanmanagement")
    ),
  },
  {
    exact: true,
    path: "/notification-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/NotificationManagement/NotificationManagement")
    ),
  },
  
 
  {
    exact: true,
    path: "/static-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import(
        "src/views/pages/Dashboard/StaticContentManagement/Staticmanagement"
      )
    ),
  },
  {
    exact: true,
    path: "/add-social",
    layout: DashboardLayout,
    component: lazy(() =>
      import(
        "src/views/pages/Dashboard/StaticContentManagement/AddSocial"
      )
    ),
  },
  {
    exact: true,
    path: "/social-links",
    layout: DashboardLayout,
    component: lazy(() =>
      import(
        "src/views/pages/Dashboard/StaticContentManagement/SocialLinks"
      )
    ),
  },

  {
    exact: true,
    path: "/tutorial-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import(
        "src/views/pages/Dashboard/StaticContentManagement/TutorialView"
      )
    ),
  },
  {
    exact: true,
    path: "/user-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/UerManagement/usermanagement")
    ),
  },
  {
    exact: true,
    path: "/user-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/UerManagement/ViewUser")
    ),
  },
  {
    exact: true,
    path: "/qrcode-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/QRcode/Qrcodeview")
    ),
  },
  {
    exact: true,
    path: "/edit-user",
    layout: DashboardLayout,  
    component: lazy(() =>
      import("src/views/pages/Dashboard/UerManagement/EditUser")
    ),
  },
  {
    exact: true,
    path: "/transaction-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/TransactionManagement/TransactionManagement")
    ),
  },
  {
    exact: true,
    path: "/service-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/ServiceRequestManagement/ServiceManagement")
    ),
  },
  {
    exact: true,
    path: "/fund-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/FundTransfer")
    ),
  },
  {
    exact: true,
    path: "/service-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/ServiceRequestManagement/ServiceView")
    ),
  },
  {
    exact: true,
    path: "/settings",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Settings/Settings")
    ),
  },
  {
    exact: true,
    path: "/change-password",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Settings/Changepassword")
    ),
  },
  {
    exact: true,
    path: "/transaction-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/TransactionManagement/Viewtransaction")
    ),
  },

  {
    exact: true,
    path: "/logs-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/LogsManagement/Logsmanagement")
    ),
  },
  {
    exact: true,
    path: "/add-tutorial",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/StaticContentManagement/Tutorial")
    ),
  },

  {
    exact: true,
    path: "/banner-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/BannerManagement/BannerManagement")
    ),
  },
  {
    exact: true,
    path: "/banner-view",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/BannerManagement/BannerView")
    ),
  },
  {
    exact: true,
    path: "/banner-update",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/BannerManagement/BannerUpdate")
    ),
  },

  {
    exact: true,
    path: "/add-banner",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/BannerManagement/Addbanner")
    ),
  },
  {
    exact: true,
    path: "/admin-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/Profile/AdminProfile")
    ),
  },
  {
    exact: true,
    path: "/utility-management",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/UtilityManagement")
    ),
  },
  {
    exact: true,
    path: "/view-loan",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Dashboard/LoanManagement/ViewLoan")
    ),
  },
  {
    exact: true,
    path: "/404",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

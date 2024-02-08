const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/version_one",
        component: () => import("components/VersionOne.vue"),
      },
      {
        path: "/version_two",
        component: () => import("components/VersionTwo.vue"),
      },
      {
        path: "/version_three",
        component: () => import("components/VersionThree.vue"),
      },
      {
        path: "/version_four",
        component: () => import("components/VersionFour.vue"),
        meta: { requiresPremium: true }, // Örnek bir route guard
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

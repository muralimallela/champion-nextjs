import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "SERVICES",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Why Us",
    path: "/contact",
    newTab: false,
  },
  {
      id: 4,
      title: "Services",
      newTab: false,
      submenu: [
        {
          id: 41,
          title: "Photo Editing",
          path: "/photo-editing",
          newTab: false,
        },
        {
          id: 42,
          title: "Poster Design",
          path: "/poster-design",
          newTab: false,
        },
        {
          id: 43,
          title: "Youtube Thumbnail",
          path: "/youtube-thumbnail",
          newTab: false,
        },
        {
          id: 44,
          title: "Logo Design",
          path: "/logo-design",
          newTab: false,
        },
        {
          id: 45,
          title: "Fluyer",
          path: "/flyer",
          newTab: false,
        },
        {
          id: 46,
          title: "MS Office",
          path: "/ms-office",
          newTab: false,
        },
        {
          id: 47,
          title: "Photography",
          path: "/photography",
          newTab: false,
        },
        {
          id: 48,
          title: "Gift Tags",
          path: "/gift-tags",
          newTab: false,
        },
      ],
    },
  // {
  //   id: 5,
  //   title: "Sign Up",
  //   path: "/signup",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "Team",
    path: "#",
    newTab: false,
  },
  // {
  //   id: 7,
  //   title: "LOGIN",
  //   path: "#",
  //   newTab: false,
  // },
  
  // {
  //   id: 4,
  //   title: "News&Events",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "News",
  //       path: "/#",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Media",
  //       path: "/#",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Achivements",
  //       path: "/#",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Sign In",
  //   path: "/signin",
  //   newTab: false,
  // },
];
export default menuData;

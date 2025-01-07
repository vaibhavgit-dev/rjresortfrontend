import { IMenuItem, IMenuItemTwo } from "@/types/menu-d-t";

const menu_data_one: IMenuItem[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
    // home_menu: true,
  },
  { id: 2, label: "About Us", url: "#" },
  {
    id: 3,
    label: "Room",
    url: "#",
  },
  { id: 4, label: "Gallery", url: "#" },
  { id: 7, label: "Contact", url: "/contact" },
];

const menu_data_aurum: IMenuItem[] = [
  {
    id: 1,
    label: "Home",
    url: "/aurum",
  },
  {
    id: 2,
    label: "Rooms",
    url: "#",
  },
  { id: 3, label: "Gallery", url: "#" },
  { id: 4, label: "Contact", url: "/contact" },
];

const menu_data_rj: IMenuItem[] = [
  {
    id: 1,
    label: "Home",
    url: "/rjresort",
  },
  {
    id: 2,
    label: "Rooms",
    url: "/rjresort/stay",
  },
  { id: 3, label: "Dining", url: "/rjresort/dining" },
  { id: 4, label: "Wedding Meetings & Events", url: "/rjresort/weddingsandevents" },
  { id: 5, label: "Spa", url: "/rjresort/spa" },
  { id: 6, label: "Gallery", url: "/gallery" },
  { id: 7, label: "Contact", url: "/contact" },
];


const menu_data_two:IMenuItemTwo[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Darjeeling",
    url: "/rjresort",
    submenu: [
      { id: 1, label: "Overview", url: "/rjresort" },
      { id: 2, label: "Stay", url: "/rjresort/rooms" },
      { id: 3, label: "Dining", url: "/rjresort/dining" },
      { id: 4, label: "Wedding Meetings & Events", url: "/rjresort/weddingsandevents" },
      { id: 5, label: "Spa", url: "/rjresort/spa" },
      { id: 7, label: "Things To Do", url: "#" },
    ],
  },
  {
    id: 3,
    label: "Siliguri",
    url: "#",
    submenu: [
      { id: 1, label: "Overview", url: "#" },
      { id: 2, label: "Stay", url: "#" },
      { id: 3, label: "Dining", url: "#" },
      { id: 4, label: "Wedding Meetings & Events", url: "#" },
    ],
  },
  { id: 4, label: "Gallery", url: "/gallery" },
];

export const MenuData = {
  menu_data_one,
  menu_data_two,
  menu_data_aurum,
  menu_data_rj,
}

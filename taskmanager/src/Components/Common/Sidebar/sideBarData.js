import { MdDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";


export const sideBarData = [
  {
    title: 'Dashboard',
    icon: MdDashboard,  // store the component, not JSX
    path: 'dboard',
  },
  // {
  //   title: 'Workspace',
  //   icon: FaPlus,
  //   path: 'wspace',
  // },
  {
    title: 'Vital Task',
    icon: MdError,
    path: 'vtask',
  },
  {
    title: 'My Task',
    icon: MdTask,
    path: 'mytask',
  },
  {
    title: 'Settings',
    icon: AiFillSetting,
    path: 'settings',
  },
  {
    title: 'Help',
    icon: FaHandsHelping,
    path: 'help',
  },
];

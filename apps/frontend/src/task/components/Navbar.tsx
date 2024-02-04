import { Link } from "react-router-dom";

const menu = [
  {
    icon: "casa",
    to: "home",
  },
  {
    icon: "calendar",
    to: "calendar",
  },
  {
    icon: "plus",
    to: "add-task",
  },
  {
    icon: "checklist",
    to: "done-tasks",
  },
  {
    icon: "user",
    to: "profile",
  },
];

export const Navbar = () => {
  return (
    <nav className='mt-auto flex border-t-[1px] border-black h-16'>
      {menu.map((item) => (
        <Link to={item.to} key={item.to} className='w-1/5  m-auto text-center'>
          <img src={item.icon} alt='' />
          {item.icon}
        </Link>
      ))}
    </nav>
  );
};

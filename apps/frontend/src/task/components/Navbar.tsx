import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: "bi bi-house-door",
    to: "/",
    priority: 0,
  },
  {
    icon: "bi bi-calendar4",
    to: "/calendar",
    priority: 0,
  },
  {
    icon: "bi bi-plus-circle-fill",
    to: "/add",
    priority: 1,
  },
  {
    icon: "bi bi-file-earmark-check",
    to: "/done",
    priority: 0,
  },
  {
    icon: "bi bi-person",
    to: "/profile",
    priority: 0,
  },
];

export const Navbar = () => {
  return (
    <nav className='flex border-t-[1px] border-gray-500 py-3 w-full max-w-screen-sm bg-white bottom-0'>
      {menu.map(({ icon, to, priority }) => (
        <NavLink
          to={to}
          key={icon}
          className={({isActive}) =>
            "w-1/5 m-auto text-center text-lava-100 " + (isActive
              ? "opacity-100"
              : "opacity-70")
          }
        >
          <i
            className={`${icon} ${priority > 0 ? "text-5xl" : "text-2xl"}`}
          ></i>
        </NavLink>
      ))}
    </nav>
  );
};

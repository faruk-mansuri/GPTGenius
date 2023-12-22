import SidebarHeader from './SidebarHeader';
import NavLinks from './NavLinks';
import MemberProfile from './MemberProfile';

const Sidebar = () => {
  return (
    <div className='px-4 py-12 w-80 min-h-full bg-base-300 grid grid-rows-[auto,1fr,auto]'>
      {/* First Row */}
      <SidebarHeader />
      {/* Second Row */}
      <NavLinks />
      {/* Third Row */}
      <MemberProfile />
    </div>
  );
};

export default Sidebar;

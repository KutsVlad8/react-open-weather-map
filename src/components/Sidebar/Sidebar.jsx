import { SidebarContainer, Navigation, NavigationItem } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navigation>
        <NavigationItem to="/">Random Weather</NavigationItem>
        <NavigationItem to="/Location">Current Location</NavigationItem>
        <NavigationItem to="/Search">Search </NavigationItem>
        <NavigationItem to="/Cities">Cities</NavigationItem>
      </Navigation>
    </SidebarContainer>
  );
};

export default Sidebar;

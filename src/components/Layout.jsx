// Styled Components
import styled from "styled-components";

// This makes the whole page a flex container. This makes possible that the sidebar appears and takes the space it needs
const Layout = styled.div`
  display: flex;
  background-color: #f8f8f8;
  width: fit-content;
  min-width: 100%;
  min-height: 100vh;
  height: 100%;
  .window-container {
    width: 100%;
  }
`;

export default Layout;
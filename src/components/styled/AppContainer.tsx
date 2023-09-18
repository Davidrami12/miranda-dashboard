// Styled Components
import styled from "styled-components";

// This makes the whole page a flex container. This makes possible that the sidebar appears and takes the space it needs
const AppContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  width: fit-content;
  min-width: 100%;
  min-height: 100vh;
  .window-container {
    width: 100%;
  }
`;

const WindowContent = styled.div`
  width: 100%;
`;

const AppContent = styled.div<{ sidebarExpanded: boolean }>`
  margin-left: ${props => props.sidebarExpanded ? "345px" : "0px"};
  margin-top: 150px;
  transition: all 0.4s;
`;

export { AppContainer, WindowContent, AppContent };
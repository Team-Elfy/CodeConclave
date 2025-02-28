// client/src/components/Editor/ProjectToolbar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaShareAlt, FaSave, FaPlay, FaEllipsisV, FaDownload, FaHome } from 'react-icons/fa';

const ProjectToolbar = ({ project, onShare }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  if (!project) return null;
  
  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };
  
  const handleExport = () => {
    // Implement export functionality
    alert('Export functionality not implemented yet');
  };
  
  const handleRunCode = () => {
    // Implement code running functionality
    alert('Run code functionality not implemented yet');
  };
  
  return (
    <ToolbarContainer>
      <ToolbarLeft>
        <DashboardButton onClick={handleGoToDashboard}>
          <FaHome />
          <span>Dashboard</span>
        </DashboardButton>
        <ProjectName>{project.name}</ProjectName>
      </ToolbarLeft>
      
      <ToolbarRight>
        <ActionButton onClick={handleRunCode}>
          <FaPlay />
          <span>Run</span>
        </ActionButton>
        
        <ActionButton onClick={onShare}>
          <FaShareAlt />
          <span>Share</span>
        </ActionButton>
        
        <MenuButton 
          onClick={() => setShowMenu(!showMenu)}
          isActive={showMenu}
        >
          <FaEllipsisV />
        </MenuButton>
        
        {showMenu && (
          <MenuDropdown>
            <MenuItem onClick={handleExport}>
              <FaDownload />
              <span>Export Project</span>
            </MenuItem>
          </MenuDropdown>
        )}
      </ToolbarRight>
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const DashboardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #4a5568;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    span {
      display: none;
    }
  }
`;

const ProjectName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0 16px;
  padding-left: 16px;
  border-left: 1px solid #e2e8f0;
  
  @media (max-width: 576px) {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #4a5568;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    span {
      display: none;
    }
    
    padding: 8px;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isActive ? '#f7fafc' : 'transparent'};
  border: none;
  color: #4a5568;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 180px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`;

export default ProjectToolbar;
'use client';
import styled from 'styled-components';

export const AppShell=styled.section`
display: flex;
min-height: 100vh;
background-color: #f9fafb;
`;

export const SidebarContainer = styled.aside<{$isOpen:boolean}>`
position: fixed;
top: 0; bottom: 0; left: 0;
z-index: 40; width: 14rem;
background-color: #111827;
transition: transform 0.2s ease;
transform: ${({$isOpen})=>($isOpen?'translateX(0)':'translateX(-100%)')};

@media (min-width: 1024px){
  position: static;
  transform: none;
}
`;

export const SimpleGrid = styled.section`
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
@media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;
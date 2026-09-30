import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing?.md || '16px'};
`;

export const Container = PageContainer; 
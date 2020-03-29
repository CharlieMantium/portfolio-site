import styled from 'styled-components';

const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
  align-items: center;
  justify-content: space-between;
`;

export default SectionItemWrapper;

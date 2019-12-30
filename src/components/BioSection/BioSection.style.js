import styled from 'styled-components';
import DrLeoPic from '../../assets/dr-leonardo-braga.jpg'

export const ProfileImage = styled.img.attrs({
  src: DrLeoPic,
})`
  height: 690px;
  margin: 0%;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.Gray};
  margin-bottom: 1rem;
`;
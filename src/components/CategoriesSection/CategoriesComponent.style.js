import styled from 'styled-components';
import TAG_MEN from '../../assets/tag_man.png';
import TAG_WOMEN from '../../assets/tag_woman.png';
import TAG_ELDER from '../../assets/tag_elder.png';
import TAG_ARTICLES from '../../assets/tag_article.png';

const imageObj = {
  Homens: TAG_MEN,
  Mulheres: TAG_WOMEN,
  Idosos: TAG_ELDER,
  Artigos: TAG_ARTICLES,
};
// section styles
export const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${({ theme }) => theme.BackgroundGray};
  padding: 2.5rem 0;
`;

// category tile styles
export const BlueOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: ${({ theme }) => theme.Blue};
  opacity: .8;
`;

export const TileWrapper = styled.div`
  position: relative;
  min-height: 270px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ category }) => category ? imageObj[category] : ""});
`;

export const TileLabel = styled.h1`
  color: white;
  position: absolute;
  z-index: 10;

`;
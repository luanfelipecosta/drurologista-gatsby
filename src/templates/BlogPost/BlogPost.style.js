import styled from "styled-components"

export const PostContainer = styled.div`
  background: ${({ theme }) => theme.BackgroundGray};
  padding: 4rem 0;
`

export const PostCard = styled.div`
  box-shadow: 0px 4px 9px 0 rgba(0, 0, 0, 0.12);
  background: ${({ theme }) => theme.BackgroundGray};
  display: flex;
  flex-direction: column;
  flex: 1;

  li,
  p {
    color: ${({ theme }) => theme.Gray};
  }

  p {
    margin-bottom: 2rem;
  }

  hr {
    background: #dedede;
  }

  blockquote {
    border-left: ${({ theme }) => `5px solid ${theme.Blue}`};
    background: ${({ theme }) => theme.BackgroundQuote};
    padding: 2rem;
    font-style: italic;
  }

  .post__image {
    width: 100%;
    max-height: 503px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
  }

  .img {
    width: 100%;
    max-height: 503px;
    object-fit: contain;
    object-fit: contain;
  }

  .post__body {
    padding: 2rem;
    padding-bottom: 4rem;
  }
`

export const BlogNav = styled.nav`
  display: flex;
  flex: 1;
  max-height: 200px;
  justify-content: space-between;
  align-items: center;

  a, a:visited {
    color: ${({ theme }) => theme.DarkBlue};
    font-weight: 500;
    text-decoration: none;
    font-size: 1.5rem;
  }
`

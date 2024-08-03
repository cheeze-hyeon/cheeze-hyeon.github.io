import { Link } from "gatsby"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  text-decoration: none; // 기본적으로 밑줄 제거
  color: inherit; // 텍스트 색상 상속

  &:hover {
    text-decoration: none; // 호버 시에도 밑줄 제거
  }
`

export const ArticleCard = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #333;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  gap: 1.5rem;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`

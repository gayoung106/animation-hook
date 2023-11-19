import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 120px 0;
  margin-top: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.p`
  display: inline-block;
  ${(props) => props.theme.typography.label};
  color: ${(props) => props.theme.palette.primary};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  ${(props) => props.theme.typography.subtitle};
  color: ${(props) => props.theme.palette.black};
  text-align: center;
  margin-bottom: 4rem;
`;

export const ItemWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemBox = styled.li`
  width: 380px;
  padding: 3rem 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
  border-radius: 0.5rem;
`;
export const ItemTitle = styled.h3`
  ${(props) => props.theme.typography.heading};
  color: ${(props) => props.theme.palette.black};
  margin-bottom: 1rem;
`;

export const ItemDescription = styled.p`
  ${(props) => props.theme.typography.description};
  margin-bottom: 1.5rem;
`;

export const ItemButton = styled.button`
  ${(props) => props.theme.typography.textbutton};
  color: ${(props) => props.theme.palette.secondary};
  margin-top: auto;
  cursor: pointer;
`;

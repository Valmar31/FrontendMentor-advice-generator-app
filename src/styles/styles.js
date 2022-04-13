import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Container2 = styled(Container)`
  background: hsl(217, 19%, 24%);
  overflow: "hidden", border;
  height: 300px;
  width: 600px;
  border-radius: 2%;
`;

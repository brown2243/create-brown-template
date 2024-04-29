import styled from "@emotion/styled";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getPosts } from "src/apis/testAPI";
import { ReactIcon } from "src/assets/svgs";
import useStoreSelector from "src/store";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.creamYellow};
`;

function Home() {
  const { isPending, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
    placeholderData: keepPreviousData,
  });

  console.log(isPending, data);

  const counter = useStoreSelector((state) => state.counter);
  const increaseCounter = useStoreSelector((state) => state.increaseCounter);

  return (
    <Container>
      <ReactIcon />
      <div>
        <span>{counter}</span>
        <button onClick={increaseCounter}>increase</button>
      </div>
    </Container>
  );
}

export default Home;

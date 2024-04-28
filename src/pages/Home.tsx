import styled from "@emotion/styled";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getPosts } from "src/apis/testAPI";
import useStoreSelector from "src/store";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <span>{counter}</span>
      <button onClick={increaseCounter}>increase</button>
    </Container>
  );
}

export default Home;

import styled from "@emotion/styled";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getPosts } from "src/apis/testAPI";
import useStoreSelector from "src/store";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
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
      <div>
        <span>{counter}</span>
        <button onClick={increaseCounter}>increase</button>
      </div>
    </Container>
  );
}

export default Home;

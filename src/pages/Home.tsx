import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getPosts } from "src/apis/testAPI";
import useSelector from "src/store";
import styled from "src/styles/styled";

const Container = styled.div`
  height: 100%;
`;

function Home() {
  const { isPending, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
    placeholderData: keepPreviousData,
  });

  const counter = useSelector((state) => state.counter);
  const increaseCounter = useSelector((state) => state.increaseCounter);

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

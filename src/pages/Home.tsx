import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getPosts } from "src/apis/testAPI";
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
  console.log(isPending, data);
  return <Container></Container>;
}

export default Home;

import { MainLayout } from "../components/MainLayout";
import { RankingStats } from "../components/RankingStats";
import { SearchContainer } from "../components/SearchContainer";
import { Alert, Typography, Skeleton } from "antd";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getPases } from "../lib/getPases";

const { Title } = Typography;

export default function Index() {
  // const { data, status, error } = useQuery("pases", getPases, { retry: 1 });

  // if (status === "loading") {
  //   return (
  //     <MainLayout>
  //       <Skeleton active />
  //     </MainLayout>
  //   );
  // }

  // if (status === "error") {
  //   return (
  //     <MainLayout>
  //       <Alert
  //         message="Error"
  //         description="No fue posible realizar la operacion."
  //         type="error"
  //         showIcon
  //       />
  //     </MainLayout>
  //   );
  // }

  // console.log(data);

  return (
    <MainLayout>
      <SearchContainer />
    </MainLayout>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery("pases", getPases, { retry: 1 });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

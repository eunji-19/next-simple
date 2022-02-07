/**
 * /movies/:id
 */
import { useRouter } from "next/router";
import CustomHeader from "../../components/CustomHeader";

export default function MovieDetail({ params }) {
  const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];

  return (
    <div>
      <CustomHeader title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // console.log(context);
  return {
    props: { params },
  };
}

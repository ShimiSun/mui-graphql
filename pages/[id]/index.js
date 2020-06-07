import React from "react";
import { Infra, ScubaInfo } from "../../layouts";

import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  return (
    <Infra>
      <ScubaInfo id={id} />
    </Infra>
  );
};

export default IndexPage;

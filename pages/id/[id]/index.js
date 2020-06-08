import React from 'react';
import { Infra, ScubaInfo } from '../../../layouts';

import { useRouter } from 'next/router';

// https://nextjs.org/docs/routing/dynamic-routes
const IndexPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Infra>
      <ScubaInfo id={id} />
    </Infra>
  );
};

export default IndexPage;

import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

function video() {
  const router = useRouter();

  return (
    <Layout>
      <span> {router.query.id} </span>
      <Button onClick={() => router.back()}>voltar</Button>
    </Layout>
  );
}

export default video;

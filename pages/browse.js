import Hotflix from 'components/browse/Hotflix';

import { getSession } from 'next-auth/client';

export default function Browse() {
  return <Hotflix />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return { props: { session } };
}

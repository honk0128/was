import { useRouter } from 'next/router';
import React from 'react';

export default function username() {
  const router = useRouter();
  console.log(router.query);
  const { username } = router.query;
  return (
    <div>
      <h1>Username</h1>
      <p>hello{username}</p>
    </div>
  );
}

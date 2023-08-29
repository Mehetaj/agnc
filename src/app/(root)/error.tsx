"use client";

import Button from "../Shared/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} className='error'>
      <div>
        <h1 className=''>Page Not Found</h1>
        <p className=''>The page you are looking for was removed, <br></br> renamed or might never existed.</p>

        <Button>Go Back</Button>
      </div>
    </div>
  );
}

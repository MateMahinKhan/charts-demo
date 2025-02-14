import { useRouteError } from "react-router-dom";


function Error() {
  const error: any = useRouteError();

  return (
    <>
      <h1>
        Something went wrong.
      </h1>
      <p>{error.data || error.message}</p>
    </>
  )
}

export default Error;
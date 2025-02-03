import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";


  return (
    <div>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
        {isLoading && 'Loading data'}
      </div>
    </div>
  );
}

export default AppLayout;

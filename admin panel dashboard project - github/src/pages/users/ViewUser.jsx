import BreadCrumb from "../../components/BreadCrumb";
import UserTable from "../../components/UserTable";

export default function ViewUser() {
  return (
    <>

      <BreadCrumb
        items={[
          "Home",
          "User",
          "View",
        ]}
      />

      <UserTable />

    </>
  );
}
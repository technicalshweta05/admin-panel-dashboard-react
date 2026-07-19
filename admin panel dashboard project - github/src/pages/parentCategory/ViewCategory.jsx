import BreadCrumb from "../../components/BreadCrumb";
import CategoryTable from "../../components/CategoryTable";

export default function ViewCategory() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Category",
          "View",
        ]}
      />

      <CategoryTable />
    </>
  );
}
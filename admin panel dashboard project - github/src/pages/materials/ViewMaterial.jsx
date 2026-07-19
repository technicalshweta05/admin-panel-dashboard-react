import BreadCrumb from "../../components/BreadCrumb";
import MaterialTable from "../../components/MaterialTable";

export default function ViewMaterial() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Material",
          "View",
        ]}
      />

      <MaterialTable />
    </>
  );
}
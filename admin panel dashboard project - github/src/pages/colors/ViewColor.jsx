import BreadCrumb from "../../components/BreadCrumb";
import ColorTable from "../../components/ColorTable";

export default function ViewColor() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Color",
          "View",
        ]}
      />

      <ColorTable />
    </>
  );
}
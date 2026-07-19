import BreadCrumb from "../../components/BreadCrumb";
import SubSubCategoryTable from "../../components/SubSubCategoryTable";

export default function ViewSubSubCategory() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Sub Sub Category",
          "View",
        ]}
      />

      <SubSubCategoryTable />
    </>
  );
}
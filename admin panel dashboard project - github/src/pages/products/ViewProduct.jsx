import BreadCrumb from "../../components/BreadCrumb";
import ProductTable from "../../components/ProductTable";

export default function ViewProduct() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Products",
          "View",
        ]}
      />

      <div className="p-6">
        <ProductTable />
      </div>
    </>
  );
}
import BreadCrumb from "../../components/BreadCrumb";
import OrderTable from "../../components/OrderTable";

export default function Orders() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Orders",
        ]}
      />

      <div className="p-6">
        <OrderTable />
      </div>
    </>
  );
}
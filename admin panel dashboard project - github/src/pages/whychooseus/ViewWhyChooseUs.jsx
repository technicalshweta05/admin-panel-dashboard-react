import BreadCrumb from "../../components/BreadCrumb";
import WhyChooseUsTable from "../../components/WhyChooseUsTable";

export default function ViewWhyChooseUs() {

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Why Choose Us",
          "View",
        ]}
      />

      <div className="p-6">

        <WhyChooseUsTable />

      </div>
    </>
  );
}
import BreadCrumb from "../../components/BreadCrumb";
import EnquiryTable from "../../components/EnquiryTable";

export default function ContactEnquiry() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Enquiry",
          "View",
        ]}
      />

      <EnquiryTable />
    </>
  );
}
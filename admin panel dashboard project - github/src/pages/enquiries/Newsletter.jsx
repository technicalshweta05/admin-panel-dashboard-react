import BreadCrumb from "../../components/BreadCrumb";
import NewsletterTable from "../../components/NewsletterTable";

export default function Newsletter() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "News Letter",
          "View",
        ]}
      />

      <NewsletterTable />
    </>
  );
}
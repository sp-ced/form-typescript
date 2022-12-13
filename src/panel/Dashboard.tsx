import { TextStyles } from "@cedcommerce/ounce-ui";
import ApiFetch from "../other/ApiFetch";

const Dashboard = () => {
  return (
    <>
      <TextStyles
        alignment="center"
        type="Heading"
        content="Welcome to Dashboard"
        textcolor="primary"
      />
      <ApiFetch />
    </>
  );
};

export default Dashboard;

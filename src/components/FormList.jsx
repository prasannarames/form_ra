import { List } from "antd";

const FormList = ({ formData }) => {
  return (
    <List
      dataSource={formData}
      renderItem={(item) => (
        <List.Item>
          <pre>{JSON.stringify(item, null, 3)}</pre>
        </List.Item>
      )}
    />
  );
};

export default FormList;

import { useState } from "react";
import { Button } from "antd";
import FormModal from "./components/FormModal";
import FormList from "./components/FormList";

const App = () => {
  const [formData, setFormData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    setFormData([...formData, values]);
    setIsModalVisible(false);
    
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)}>Add Form</Button>
      <FormModal
        visible={isModalVisible}
        onFinish={onFinish}
        onCancel={() => setIsModalVisible(false)}
      />
      <FormList formData={formData} />
    </div>
  );
};

export default App;

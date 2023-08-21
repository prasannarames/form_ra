import { Modal, Form, Button, Input, Radio, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./FormModal.css";

const FormModal = ({ visible, onFinish, onCancel }) => {
  // file upload
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Modal
      title="Create Form"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email format" },
          ]}
          extra="example@example.com "
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          label="Did you file the returns last year ?"
          name="return last year"
        >
          <Radio.Group>
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="File Upload"
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div
                style={{
                  marginTop: "1em",
                }}
              >
                <PlusOutlined />
                <h5 style={{ margin: "0" }}>Browse Files</h5>
                <p>Drag and drop files here</p>
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Was there any ownership structure changes in last year ?"
          name="changes last year"
        >
          <Radio.Group>
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          extra="Upload latest shareholding pattern"
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div
                style={{
                  marginTop: "1em",
                }}
              >
                <PlusOutlined />
                <h5 style={{ margin: "0" }}>Browse Files</h5>
                <p>Drag and drop files here</p>
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default FormModal;

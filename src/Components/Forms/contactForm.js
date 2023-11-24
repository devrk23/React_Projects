import React from "react";
import { Button, Form, Input} from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const onFinish = (values) => {
  console.log(values);
};
const { TextArea } = Input;

const ContactForm = () => (
 <div style={{width:'950px',height:'400px',marginBottom:'0',display:'flex',justifyContent:'center'}}>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <div style={{ display: "flex", flexDirection: "row",justifyContent:'center'}}>
      <Form.Item
        name={["name"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Name*" />
      </Form.Item>
      <Form.Item
        name={["Number"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Phone*" />
      </Form.Item>
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Form.Item
        name={["Phone Number"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Phone*" />
      </Form.Item>
      <Form.Item name={["user", "name"]}>
        <Input placeholder="Subject*" />
      </Form.Item>
    </div>
    <Form.Item>
          <TextArea rows={5} placeholder="Describe your Message"/>
          
    </Form.Item>
      <Button type="default" htmlType="submit" style={{color:'black',backgroundColor:'white',outline:'black'}}>
        SEND MESSAGE
      </Button>
    
  </Form>
  </div>
);
export default ContactForm;


import { PlusOutlined } from '@ant-design/icons';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Upload
} from 'antd';
const Register = () => {
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    return (
        <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Register </h1>
      <>
    
      <Form
        
        layout="vertical"
        style={{widht: "100%"}}
      >
       <Form.Item label="What social media to verity ">
          <Select>
            <Select.Option value="demo">Twiter</Select.Option>
            <Select.Option value="demo">Facebook</Select.Option>
            <Select.Option value="demo">Google </Select.Option>
            <Select.Option value="demo">Twich</Select.Option>
            <Select.Option value="demo">Tiktok</Select.Option>

          </Select>
        </Form.Item>
        <Form.Item label="Social Accout user name">
          <Input />
        </Form.Item>
        <Form.Item label="Follower Count">
          <InputNumber />
        </Form.Item>
    
        <Form.Item label="Screenshot showing ownership of account" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
     
          <Button >Submit</Button>
      
      </Form>
    </>
    </>
    );
};

export default Register;
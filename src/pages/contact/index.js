import React from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';
import { Map, Marker } from 'react-amap';

import hezuo from '@/assets/images/hezuo.jpg';

const { Title, Paragraph } = Typography;

export default connect()(props => {

  const { dispatch } = props;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch({
      type: 'contact/submitContact',
      payload: values,
    });
  };

  return (
    <div>
      <div><img src={hezuo} alt={'联系我们'}/></div>
      <Row>
        <Col xs={24} xl={{ span: 16, offset: 5 }}>
          <Title level={3}>联系我们</Title>
          <Paragraph>
            廊坊市广用自动化设备有限公司欢迎广大客户与我们保持良好的沟通，用您的热忱和关爱，帮助我们不断追求卓越的品质，促进我们到达成功的彼岸。同时，廊坊市广用自动化设备有限公司也竭诚为广大客户提供最优质的服务。GUANGYONG
            TECH，与您同行！
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ padding: 5 }}>
        <Col xs={24} xl={{ span: 7, offset: 5 }}>
          <div style={{ border: '1px solid #000', padding: 10 }}>
            <Paragraph strong>廊坊市广用自动化设备有限公司</Paragraph>
            <Paragraph strong>地址：廊坊市广阳区春和花园南区8-2-202</Paragraph>
            <Paragraph strong>邮编：065000</Paragraph>
            <Paragraph strong>电话：0316-5176208</Paragraph>
            <Paragraph strong>手机：13292669905</Paragraph>
            <Paragraph strong>E-MAIL：<a href="mailto:lfguangyong@163.com">lfguangyong@163.com</a></Paragraph>
            <Paragraph strong>网址：<a href="http://www.gy-peak.cn">www.gy-peak.cn</a></Paragraph>
            <div style={{ width: 300, height: 300, margin: '0 auto' }}>
              <Map
                plugins={['ToolBar']}
                center={{ longitude: 116.718139, latitude: 39.532615 }}
                zoom={11}
              >
                <Marker label={{ content: '廊坊市广用自动化设备有限公司' }}
                        position={{ longitude: 116.718103, latitude: 39.532629 }}/>
              </Map>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={9}>
          <div style={{ border: '1px solid #000', padding: 20 }}>
            <Form
              {...layout}
              form={form}
              size={'small'}
              name="contact"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="companyName"
                label="公司名称"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请填写公司名称！',
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="address"
                label="公司地址"
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="contacts"
                label="联系人"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请填写公司联系人！',
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="city"
                label="城市"
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="companyWebsite"
                label="公司网页"
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请填写联系邮箱！',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                name="tel"
                label="公司电话"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请填写联系电话！',
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="fax"
                label="公司传真"
              >
                <Input/>
              </Form.Item>

              <Form.Item name="problem" label="有关问题(多选)">
                <Checkbox.Group>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="技术" style={{ lineHeight: '32px' }}>
                        技术
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="目录索取" style={{ lineHeight: '32px' }}>
                        目录索取
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="产品咨询" style={{ lineHeight: '32px' }}>
                        产品咨询
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="其他" style={{ lineHeight: '32px' }}>
                        其他
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item name="problemDescription" label="问题描述">
                <Input.TextArea autoSize={true}/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
});

import React from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';

export default () => {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <>
      <Row>
        <Col  xs={24} xl={{ span: 10, offset: 7 }}>
          <div style={{ marginTop: 20, backgroundColor: 'red' }}>
            <p>烦请您填写以下资料，方便技术人员跟您联系，谢谢！</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} xl={{ span: 10, offset: 7 }}>
          <div style={{ border: '1px solid #000', padding: 20 }}>
            <Form
              {...layout}
              size={'small'}
              name={'selection'}
              // onFinish={onFinish}
              // onFinishFailed={}
              scrollToFirstError
            >
              <Form.Item
                name="contacts"
                label="联系人姓名"
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

              <Form.Item name="businessType" label="商业类型">
                <Checkbox.Group>
                  <Row>
                    <Col span={12}>
                      <Checkbox value="贸易商" style={{ lineHeight: '32px' }}>
                        贸易商
                      </Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="代理商" style={{ lineHeight: '32px' }}>
                        代理商
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
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
                label="手机"
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
                name="address"
                label="地址"
              >
                <Input/>
              </Form.Item>

              <Form.Item name="demand" label="其他需求">
                <Checkbox.Group>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="产品目录" style={{ lineHeight: '32px' }}>
                        产品目录
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="报价" style={{ lineHeight: '32px' }}>
                        报价
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="交货时间" style={{ lineHeight: '32px' }}>
                        交货时间
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="付款方式" style={{ lineHeight: '32px' }}>
                        付款方式
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="最小起订量" style={{ lineHeight: '32px' }}>
                        最小起订量
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
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
    </>
  );
}

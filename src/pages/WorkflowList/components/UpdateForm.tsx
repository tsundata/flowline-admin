import { ProFormSelect, ProFormText, ProFormTextArea, StepsForm } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  describe?: string;
  trigger?: string;
  triggerParam?: string;
} & Partial<API.Workflow>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Workflow>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.workflowList.form.workflowConfig',
              defaultMessage: '工作流配置',
            })}
            open={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={async (values: FormValueType) => {
        if (values.trigger == 'cron') {
          if (values.triggerParam == undefined || values.triggerParam == '') {
            message.warn('请设置定时规则！');
            return false;
          }
        }
        await props.onSubmit({ ...props.values, ...values });
        return true;
      }}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          describe: props.values.describe,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
      >
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'pages.workflowList.form.name',
            defaultMessage: '工作流名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.workflowList.ruleName"
                  defaultMessage="请输入工作流名称！"
                />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="describe"
          width="md"
          label={intl.formatMessage({
            id: 'pages.workflowList.form.describe',
            defaultMessage: '工作流描述',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.workflowList.form.describe.descPlaceholder',
            defaultMessage: '请输入工作流描述',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.workflowList.form.describe.descPlaceholder"
                  defaultMessage="请输入工作流描述！"
                />
              ),
              min: 1,
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          trigger: props.values.trigger,
          triggerParam: props.values.triggerParam,
        }}
        title={intl.formatMessage({
          id: 'pages.workflowList.form.trigger.title',
          defaultMessage: '设定调度方式',
        })}
      >
        <ProFormSelect
          name="trigger"
          label={intl.formatMessage({
            id: 'pages.workflowList.form.trigger',
            defaultMessage: '调度方式',
          })}
          width="md"
          valueEnum={{
            manual: intl.formatMessage({ id: 'pages.workflowList.trigger.manual' }),
            cron: intl.formatMessage({ id: 'pages.workflowList.trigger.cron' }),
          }}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.workflowList.form.trigger.rule"
                  defaultMessage="请选择调度方式！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="triggerParam"
          label={intl.formatMessage({
            id: 'pages.workflowList.form.cron',
            defaultMessage: '定时规则',
          })}
          width="md"
          rules={[
            {
              required: false,
              message: (
                <FormattedMessage
                  id="pages.workflowList.form.cron.rule"
                  defaultMessage="请输入定时规则！"
                />
              ),
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;

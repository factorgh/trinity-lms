import {
  EyeOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Table } from "antd";
import React, { useState } from "react";

// Create Question Modal
const CreateQuestionModal = ({ visible, onClose, onAddQuestion }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newQuestion = {
      id: Date.now(), // Unique ID
      question: values.question,
      options: values.options.filter((opt) => opt), // Remove empty options
    };

    onAddQuestion(newQuestion);
    form.resetFields(); // Reset form
    onClose(); // Close modal
  };

  return (
    <Modal
      title="Create New Question"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Question Input */}
        <Form.Item
          label="Question"
          name="question"
          rules={[{ required: true, message: "Question is required!" }]}
        >
          <Input placeholder="Enter your question" />
        </Form.Item>

        {/* Options Input (Dynamic Fields) */}
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }) => (
                <div key={key} className="flex items-center gap-2 mb-2">
                  <Form.Item
                    name={name}
                    rules={[{ required: true, message: "Option is required!" }]}
                    className="flex-grow"
                  >
                    <Input placeholder="Enter option" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add Option
              </Button>
            </>
          )}
        </Form.List>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" className="w-full mt-4">
          Add Question
        </Button>
      </Form>
    </Modal>
  );
};

// Main Component with Table
const QuestionManager = () => {
  const [questions, setQuestions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Add new question
  const addQuestion = (newQuestion) => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  // Show question preview
  const previewQuestion = (question) => {
    setSelectedQuestion(question);
    setPreviewVisible(true);
  };

  // Table Columns
  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <EyeOutlined
          className="text-blue-500 cursor-pointer"
          onClick={() => previewQuestion(record)}
        />
      ),
    },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Admin Quiz Manager</h2>

      {/* Table to Show Questions */}
      <Table
        dataSource={questions}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      {/* Open Create Question Modal */}
      <Button
        type="primary"
        className="mt-4 w-full"
        onClick={() => setIsModalVisible(true)}
      >
        Create New Question
      </Button>

      {/* Create Question Modal */}
      <CreateQuestionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddQuestion={addQuestion}
      />

      {/* Preview Modal */}
      <Modal
        title="Question Preview"
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
      >
        {selectedQuestion && (
          <div>
            <h3 className="font-semibold">{selectedQuestion.question}</h3>
            <ul className="list-disc ml-5 mt-2">
              {selectedQuestion.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuestionManager;

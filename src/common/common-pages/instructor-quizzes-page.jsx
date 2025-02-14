import {
  EyeOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Table, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { createQuiz } from "../services";
import useFetchCourse from "../hooks/useFetchCourse";
import useFetchQuizzes from "../hooks/useFetchQuizzes";

const { Option } = Select;

const CreateQuizModal = ({ visible, onClose, onAddQuiz }) => {
  const [form] = Form.useForm();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { data } = useFetchCourse();

  const handleSetCorrectAnswer = (questionIndex, optionText) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionText,
    }));

    // Set correctAnswer field in the form
    form.setFieldsValue({
      questions: form
        .getFieldValue("questions")
        .map((q, index) =>
          index === questionIndex ? { ...q, correctAnswer: optionText } : q
        ),
    });
  };

  const handleSubmit = async (values) => {
    const timestamp = Date.now();
    const answers = []; // Store correct answer indexes

    const newQuiz = {
      id: timestamp,
      title: values.courseId,
      questions: values.questions.map((q, questionIndex) => {
        const options = q.options.map((opt) => opt.text).filter(Boolean);
        const correctAnswer = selectedAnswers[questionIndex] || "";
        const correctIndex = options.indexOf(correctAnswer); // Find the index

        if (correctIndex !== -1) {
          answers.push(correctIndex);
        }

        return {
          id: `${timestamp}-${questionIndex}`,
          question: q.question,
          options: options,
          correctAnswer: correctAnswer,
        };
      }),
    };

    console.log("Correct Answer Indexes:", answers); // Log the indexes
    console.log(newQuiz);

    onAddQuiz(newQuiz);
    // Send request to backend to store quiz
    // course_id, questions, answers;
    const res = await createQuiz(newQuiz.title, newQuiz.questions, answers);
    console.log(
      "-------------------------------------Create Quiz-------------"
    );
    console.log(res);
    message.success({ message: "Quiz successfully added" });
    form.resetFields();
    setSelectedAnswers({});
    onClose();
  };

  return (
    <Modal
      title="Create New Quiz"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Select Course"
          name="courseId"
          rules={[{ required: true, message: "Course selection is required!" }]}
        >
          <Select placeholder="Select a course">
            {data?.map((course) => (
              <Option key={course._id} value={course._id}>
                {course.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.List name="questions">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey }) => (
                <div key={key} className="mb-4 p-4 border rounded-lg">
                  <Form.Item
                    name={[name, "question"]}
                    rules={[
                      { required: true, message: "Question is required!" },
                    ]}
                  >
                    <Input placeholder="Enter question" />
                  </Form.Item>
                  <Form.List name={[name, "options"]}>
                    {(
                      optionFields,
                      { add: addOption, remove: removeOption }
                    ) => (
                      <>
                        {optionFields.map(
                          ({ key: optionKey, name: optionName }, index) => (
                            <div
                              key={optionKey}
                              className="flex items-center gap-2 mb-2"
                            >
                              <Form.Item
                                name={[optionName, "text"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Option is required!",
                                  },
                                ]}
                                className="flex-grow"
                              >
                                <Input placeholder={`Option ${index + 1}`} />
                              </Form.Item>
                              <Button
                                type={
                                  selectedAnswers[fieldKey] ===
                                  form.getFieldValue([
                                    "questions",
                                    fieldKey,
                                    "options",
                                    index,
                                    "text",
                                  ])
                                    ? "primary"
                                    : "default"
                                }
                                ghost
                                onClick={() =>
                                  handleSetCorrectAnswer(
                                    fieldKey,
                                    form.getFieldValue([
                                      "questions",
                                      fieldKey,
                                      "options",
                                      index,
                                      "text",
                                    ])
                                  )
                                }
                              >
                                Set Correct
                              </Button>
                              <MinusCircleOutlined
                                onClick={() => removeOption(optionKey)}
                                className="text-red-500 cursor-pointer"
                              />
                            </div>
                          )
                        )}
                        <Button
                          type="dashed"
                          onClick={addOption}
                          icon={<PlusOutlined />}
                        >
                          Add Option
                        </Button>
                      </>
                    )}
                  </Form.List>
                  <Form.Item name={[name, "correctAnswer"]}>
                    <Input
                      disabled
                      placeholder="Selected correct answer"
                      value={selectedAnswers[fieldKey] || ""}
                      style={{ fontWeight: "bold", color: "green" }}
                    />
                  </Form.Item>
                  <Button
                    type="dashed"
                    danger
                    onClick={() => remove(name)}
                    className="mt-2 w-full"
                  >
                    Remove Question
                  </Button>
                </div>
              ))}
              <Button
                type="dashed"
                onClick={add}
                icon={<PlusOutlined />}
                className="w-full"
              >
                Add Question
              </Button>
            </>
          )}
        </Form.List>
        <Button type="primary" htmlType="submit" className="w-full mt-4">
          Create Quiz
        </Button>
      </Form>
    </Modal>
  );
};

const QuizManager = () => {
  const { data: quizz } = useFetchQuizzes();
  console.log(quizz);
  const [quizzes, setQuizzes] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    if (quizz) {
      setQuizzes(quizz);
    }
  }, [quizz]);
  console.log(selectedQuiz);
  const addQuiz = (newQuiz) => setQuizzes((prev) => [...prev, newQuiz]);
  const previewQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setPreviewVisible(true);
  };

  const columns = [
    { title: "Quiz Title", dataIndex: "course_id", key: "course_id" },
    {
      title: "Total Questions",
      key: "totalQuestions",
      render: (_, record) => record.questions.length,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <EyeOutlined
          className="text-blue-500 cursor-pointer"
          onClick={() => previewQuiz(record)}
        />
      ),
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Admin Quiz Manager</h2>
      <Table
        dataSource={quizzes}
        columns={columns}
        rowKey="id"
        pagination={false}
        className="mb-4"
      />
      <Button
        type="primary"
        className="mt-4 w-full"
        onClick={() => setIsModalVisible(true)}
      >
        Create New Quiz
      </Button>
      <CreateQuizModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddQuiz={addQuiz}
      />
      <Modal
        title="Quiz Preview"
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
      >
        {selectedQuiz && (
          <div>
            <h3 className="font-semibold">{selectedQuiz.title}</h3>
            <ul className="mt-2 space-y-4">
              {selectedQuiz.questions.map((q, index) => (
                <li key={q.id} className="border-b pb-2">
                  <strong className="block mb-2">
                    {index + 1}. {q.question}
                  </strong>
                  <ul className="list-disc ml-5 space-y-1">
                    {q.options.map((option, i) => (
                      <li
                        key={`${q.id}-${i}`}
                        className={`p-1 rounded ${
                          option === q.correctAnswer
                            ? "bg-green-100 font-bold text-green-700"
                            : ""
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuizManager;

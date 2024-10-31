import { Input, Select, Typography } from "antd";
import React from "react";

const { TextArea } = Input;
const { Label } = Typography;

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(controlItem) {
    const currentControlItemValue = formData[controlItem.name] || "";

    switch (controlItem.componentType) {
      case "input":
        return (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
      case "select":
        return (
          <Select
            value={currentControlItemValue}
            onChange={(value) =>
              setFormData({
                ...formData,
                [controlItem.name]: value,
              })
            }
            placeholder={controlItem.label}
            style={{ width: "100%" }}
          >
            {controlItem.options &&
              controlItem.options.length > 0 &&
              controlItem.options.map((optionItem) => (
                <Select.Option key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </Select.Option>
              ))}
          </Select>
        );
      case "textarea":
        return (
          <TextArea
            id={controlItem.name}
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
      default:
        return (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;

import React from "react";
import { Form } from "react-bootstrap";
export const InputField = ({ input, label, type, meta: { touched, error, warning } }) => (
   <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} as="input" type={type} placeholder={label} />
      {touched && error && (
         <Form.Control.Feedback style={{ display: "block" }} type="invalid">
            {error}
         </Form.Control.Feedback>
      )}
   </Form.Group>
);

export const InputFieldWithoutLabel = ({ input, label, type, meta: { touched, error, warning } }) => (
   <div>
      <Form.Control {...input} as="input" placeholder={label} />
      {touched && error && (
         <Form.Control.Feedback style={{ display: "block" }} type="invalid">
            {error}
         </Form.Control.Feedback>
      )}
   </div>
);

export const TextAreaField = ({ input, label, type, meta: { touched, error, warning } }) => (
   <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} as="textarea" placeholder={label} />
      {touched && error && (
         <Form.Control.Feedback style={{ display: "block" }} type="invalid">
            {error}
         </Form.Control.Feedback>
      )}
   </Form.Group>
);

export const CheckBox = ({ input, label }) => (
   <Form.Group>
      <Form.Check {...input} type="checkbox" checked={input.value} label={label} />
   </Form.Group>
);

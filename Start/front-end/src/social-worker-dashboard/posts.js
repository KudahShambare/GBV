import * as React from "react";
import { useState } from "react";
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const PostList = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid>
      <TextField label="tracking Number" source="id" />
      <ReferenceField
        label="Assigned Social Worker"
        source="userId"
        reference="users"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Case Details" source="title" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (props) => {
  const [caseNumber, setCaseNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [activityType, setActivityType] = useState("");
  const [activityDesc, setActivityDesc] = useState("");
  const trackingFunction = () => {
    const caseDetails = { caseNumber, userId, activityType, activityDesc };
    if (caseNumber && userId && activityType) {
      fetch("http://localhost:8000/cases/assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(caseDetails),
      })
        .then(() => {
          alert("Case assigned and updated");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Please click on tracking number, user and comment");
    }
  };
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm handleSubmit={alert("Submit has been triggered")}>
        <TextInput source="id" onBlur={(e) => setCaseNumber(e.target.value)} />
        <ReferenceInput
          label="User"
          source="userId"
          reference="users"
          onChange={(e) => {
            setUserId(e.target.value);
            trackingFunction();
          }}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput
          source="title"
          onBlur={(e) => setActivityType(e.target.value)}
        />
        <TextInput
          multiline
          source="body"
          onBlur={(e) => setActivityDesc(e.target.value)}
        />
      </SimpleForm>
    </Edit>
  );
};

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="teaser" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TextInput } from './TextInput';
import type { InputFieldConfig } from './TextInput';

const meta: Meta<InputFieldConfig> = {
  title: 'Components/InputField',
  component: TextInput,
  parameters: { layout: 'centered' },
};
export default meta;

export const Playground: StoryObj<InputFieldConfig> = {
  render: (args) => {
    const [val, setVal] = useState('');
    return (
      <div className="w-80">
        <TextInput {...args} value={val} onChange={(e) => setVal(e.target.value)} />
      </div>
    );
  },
  args: {
    label: 'Username',
    placeholder: 'Type here…',
    clearable: true,
  },
};

export const WithValidation: StoryObj<InputFieldConfig> = {
  render: () => (
    <div className="w-80">
      <TextInput
        label="Email"
        placeholder="you@example.com"
        validate={(val) => (val.includes('@') ? null : 'Must include @')}
        clearable
      />
    </div>
  ),
};

export const Password: StoryObj<InputFieldConfig> = {
  args: {
    label: 'Password',
    type: 'password',
    passwordToggle: true,
    placeholder: '••••••••',
  },
};

import { FormItemProps } from 'antd';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps extends Partial<FormItemProps> {
    value: string;
    onChange: (value: any) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const [internalValue, setInternalValue] = useState(value);
    const modules = { toolbar: ['bold', 'italic', 'underline', 'strike', 'link', 'clean'] };

    const handleChange = (content: string) => {
        const value = content !== '<p><br></p>' ? content : '';
        setInternalValue(value);
        onChange?.(value);
    };

    return (
        <ReactQuill
            theme="snow"
            value={internalValue}
            modules={modules}
            onChange={handleChange}
            placeholder="Please type each announcement on a separate line"
            className={`[&_.ql-blank]:text-sm [&_.ql-blank]:before:!leading-loose [&_.ql-blank]:lg:text-base [&_.ql-container]:h-72 [&_.ql-container]:rounded [&_.ql-container]:bg-[rgba(0,0,0,0.04)] [&_.ql-container]:font-[monospace] [&_.ql-container]:transition-colors [&_.ql-container]:![border:1px_solid_transparent] [&_.ql-container]:focus-within:!border-[#1677ff] [&_.ql-container]:focus-within:bg-white lg:[&_.ql-container]:h-96 [&_.ql-editor_p]:text-sm [&_.ql-editor_p]:!leading-loose [&_.ql-editor_p]:lg:text-base [&_.ql-toolbar]:mb-4 [&_.ql-toolbar]:rounded ${internalValue === '' && '[&_.ql-container]:focus-within:!border-[#ff4d4f]'}`}
        />
    );
};

export default Editor;

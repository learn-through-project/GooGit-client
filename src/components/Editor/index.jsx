import React, { useMemo, useState, useCallback } from 'react';
import { Wrapper } from './styledComponents';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import HoveringToolbar from './HoveringToolbar';
import Leaf from './Leaf';
import { useEffect } from 'react';

export default function Editor({
  onNoteModify,
  isModified,
  currentNote,
}) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  useEffect(() => {
    if (!currentNote) return;

    setValue(currentNote.blocks);
  }, [currentNote]);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Wrapper>
      <Slate
        editor={editor}
        value={value}
        onChange={newValue => {
          if (newValue === value) return;

          setValue(newValue);
          onNoteModify(newValue, isModified);
        }}
      >
        <HoveringToolbar />
        <Editable
          renderLeaf={renderLeaf}
          placeholder='내용을 입력하세요.'
        />
      </Slate>
    </Wrapper>
  );
}
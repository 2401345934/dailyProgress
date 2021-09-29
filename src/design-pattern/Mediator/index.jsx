import { useReactive, useMount, useLocalStorageState } from 'ahooks';
import { markdown } from 'markdown';
import './index.less';

export default () => {
  const state = useReactive({
    editor: {},
    preview: {},
    hintbar: {},
  });
  const [valueMessage, setMessage] =
    useLocalStorageState('请输入我会报存你的输入刷新不会丢失');

  useMount(() => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const hintbar = document.getElementById('hintbar');
    state.editor = editor;
    state.preview = preview;
    state.hintbar = hintbar;
    state.preview.innerHTML = editor.innerHTML;
  });

  const editorInput = ({ target: { value } }) => {
    state.preview.innerHTML = value;
    setMessage(value);
  };

  const editorScroll = () => {
    preview.scrollTop = editor.scrollTop;
    var scrollRange = editor.scrollHeight - editor.clientHeight,
      p = editor.scrollTop / scrollRange;

    console.log(p);
    hintbar.innerHTML = Math.round(100 * p) + '%';
  };

  return (
    <div className="body">
      <textarea
        value={valueMessage}
        id="editor"
        onScroll={editorScroll}
        onInput={editorInput}
      >
        　
      </textarea>
      <div id="preview"></div>
      <div id="hintbar">0%</div>
    </div>
  );
};

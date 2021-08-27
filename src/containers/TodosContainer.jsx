import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = () => {
  const { inputText, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (inputText) => dispatch(changeInput(inputText)),
    [dispatch],
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <Todos
      inputText={inputText}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;

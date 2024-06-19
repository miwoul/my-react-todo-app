import { FiPlus } from 'react-icons/fi';

function TodoInput() {
  return (
    <form className="flex items-center mt-4 bg-yellow-100 p-2 rounded-lg shadow-md mb-6">
      <input
        type="text"
        placeholder="Add your items"
        className="focus:ring-0 border-none outline-none p-2 flex-grow bg-yellow-100"
      ></input>
      <button className="bg-amber-200 rounded-full text-white p-2 shadow-md hover:bg-amber-100 transition duration-300">
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TodoInput;

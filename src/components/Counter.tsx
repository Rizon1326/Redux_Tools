import {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { 
  increment, 
  decrement, 
   
  reset 
} from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Counter</h2>
      
      <div className="flex justify-center items-center gap-4 mb-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        
        <span className="text-3xl font-bold">{count}</span>
        
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
    
      </div>
      
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
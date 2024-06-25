import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.counter.count);
  const tallies = useAppSelector((state) => state.counter.tallies);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
          {/* <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment by 5
        </button> */}
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>
          <h1 className="text-3xl mx-10">{state}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
        <div className="mt-10">
          {tallies.map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-blue-500 inline-block mx-1"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

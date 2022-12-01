import React from "react";

interface Props {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ value, changeHandler, submitHandler }) => {
  return (
    <div>
      <form
        className="flex flex-col bg-slate-50 w-full px-10 py-4 md:py-6 rounded-lg shadow-lg mb-3"
        onSubmit={submitHandler}
      >
        <div>
          <input
            className="shadow-md w-full p-2 rounded-lg text-lg focus:outline-blue-300 focus:outline-2 focus:shadow-none"
            type="text"
            value={value}
            placeholder="enter item"
            onChange={changeHandler}
          />
        </div>
        <button
          className="mt-6 main-color flex items-center justify-center p-1 rounded-lg shadow-md text-white text-xl hover:shadow-none"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

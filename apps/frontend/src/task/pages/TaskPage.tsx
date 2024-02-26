// import { useParams } from "react-router-dom";
import { WithoutNabarLayout } from "../layout/WithoutNabarLayout";
import { TaskCard } from "../components/TaskCard";
import { ChangeEvent } from "react";

export const TaskPage = () => {
  // const { id } = useParams();

  const handleDoneCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log("se hizo la tarea")
    }
  }

  return (
    <WithoutNabarLayout>
      <h1 className='text-2xl font-bold mb-3'>Website for Rune.io</h1>
      <h2 className='text-xl font-bold mb-3'>Objective</h2>
      <p className='text-gray-600'>
        Effectively rnonoge o nd coo-rdinote the tasks irvwalved in the
        development Of the RuneiO finder website. Ensure alignment with project
        goals, timelines. and quality standards, <br /> <br />
        with the dasign to Outline tho requirements for the •a•ewte redesign.
        Cl«vly define the visual user interface improvements. and overall user
        experience enhancements.
      </p>
      <h3 className='text-xl font-bold mb-3 mt-4'>Subtasks:</h3>
      <article>
        <TaskCard>
          <div className="w-12 ">
            <img
              src='/user.png'
              alt=''
              className='rounded-full aspect-square w-full mr-2'
            />
          </div>
          <div className='mr-2 ml-3 flex flex-col flex-1 overflow-hidden'>
            <h2 className='font-bold text-xl text-left overflow-hidden text-ellipsis text-nowrap'>Job matching optimization</h2>
            <p className='text-sm text-gray-500 text-left mt-1'>
              Digital product design
            </p>
          </div>
          <div className="w-6 ">
            <input type="checkbox" name="done" id="done" className="w-6 h-6" onChange={handleDoneCheckBox} />
          </div>
        </TaskCard>
      </article>
    </WithoutNabarLayout>
  );
};

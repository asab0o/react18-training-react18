import { memo, useDeferredValue } from "react";
import type { Task } from "./Transition";

type Props = {
    taskList: Task[];
}

export const TaskList = memo(({ taskList }: Props) => {
    // 緊急性高くないものを引数に指定, Transitionが効いている
   const deferredTaskList = useDeferredValue(taskList);
    return (
        <>
            {deferredTaskList.map((task) => (
                <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender'}}>
                    <p>title: {task.title}</p>
                    <p>member: {task.assignee}</p>
                </div>
            ))}
        </>
    )
})
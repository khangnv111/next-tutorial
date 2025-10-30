
import {Counter} from "@/app/counter/counter";
export const metadata = {
    title: 'counter',
}

export default function CounterPage()
{
    return (
        <div>
            <h2>Counter</h2>
            <Counter />
        </div>
    );
}
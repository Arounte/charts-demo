import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line } from './Line';
import { Pie } from './Pie';
import { Bar } from './Bar';

ChartJS.register(CategoryScale, ArcElement, BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
    return (
        <>
            <Line />
            <Pie />
            <Bar />
        </>
    );
}

export default App;

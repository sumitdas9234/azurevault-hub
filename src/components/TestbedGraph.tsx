import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { time: '00:00', count: 200 },
  { time: '04:00', count: 220 },
  { time: '08:00', count: 190 },
  { time: '12:00', count: 240 },
  { time: '16:00', count: 230 },
  { time: '20:00', count: 250 },
  { time: '24:00', count: 243 },
];

export function TestbedGraph() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={data}>
        <XAxis 
          dataKey="time" 
          hide 
        />
        <YAxis 
          hide 
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#fe5000"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

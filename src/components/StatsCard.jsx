import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const StatsCard = ({ data }) => {
    console.log("StatsCard Data:", data);

    return (
        <div className="card max-w-7xl bg-white shadow-xl p-4 w-full h-[300px]">
            <h2 className="card-title text-sm">Stat Overview</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatsCard;
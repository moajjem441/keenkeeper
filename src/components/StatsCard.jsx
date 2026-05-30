'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const StatsCard = ({ data }) => {
    console.log("StatsCard Data:", data);
    return (
        <div className ="max-w-8xl mx-auto p-4 h-[60vh]">
            <h1 className="text-2xl font-bold mb-4">Interaction Stats</h1>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
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
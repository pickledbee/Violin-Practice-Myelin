import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  BarChart,
  Bar,
  Cell,
  LabelList
} from 'recharts';

// --- Struggle Zone Chart ---

const struggleData = [
  { difficulty: 0, learning: 0, label: "Boredom" },
  { difficulty: 20, learning: 20 },
  { difficulty: 50, learning: 50 },
  { difficulty: 80, learning: 95, label: "The Struggle Zone" }, // Peak learning
  { difficulty: 85, learning: 100 },
  { difficulty: 90, learning: 80 },
  { difficulty: 100, learning: 10, label: "Anxiety/Panic" },
];

export const StruggleZoneChart: React.FC = () => {
  return (
    <div className="w-full h-80 bg-white p-4 rounded-xl shadow-sm border border-slate-200 my-6">
      <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">The Struggle Zone (Optimal Learning)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={struggleData} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="difficulty" 
            label={{ value: 'Difficulty / Error Rate', position: 'insideBottom', offset: -5 }} 
            tickFormatter={(val) => `${val}%`}
            stroke="#64748b"
          />
          <YAxis 
            label={{ value: 'Myelination Rate', angle: -90, position: 'insideLeft' }} 
            hide
          />
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Learning Efficiency']}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <ReferenceArea x1={75} x2={90} stroke="none" fill="#818cf8" fillOpacity={0.2} />
          <Line 
            type="monotone" 
            dataKey="learning" 
            stroke="#4f46e5" 
            strokeWidth={3} 
            dot={{ r: 4, strokeWidth: 2 }} 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-slate-500 mt-2">Target ~85% success rate for maximum dopamine/epinephrine balance.</p>
    </div>
  );
};

// --- Speed Comparison Chart ---

const speedData = [
  { type: 'Unmyelinated', speed: 2, color: '#94a3b8' },
  { type: 'Myelinated', speed: 200, color: '#4f46e5' },
];

export const SpeedComparisonChart: React.FC = () => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-xl shadow-sm border border-slate-200 my-6">
      <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">Neural Transmission Speed (Meters/Second)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={speedData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
          <XAxis type="number" stroke="#64748b" />
          <YAxis dataKey="type" type="category" width={100} stroke="#64748b" tick={{fontSize: 12, fontWeight: 600}} />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="speed" radius={[0, 4, 4, 0]} barSize={40}>
            {speedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="speed" position="right" formatter={(val: number) => `${val} m/s`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-slate-500 mt-2">Myelin increases signal speed by up to 100x.</p>
    </div>
  );
};

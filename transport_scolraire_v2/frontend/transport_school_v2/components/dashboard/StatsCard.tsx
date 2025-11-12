interface StatsCardProps {
    title: string;
    value: number | string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
}

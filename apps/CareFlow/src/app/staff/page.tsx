import Link from "next/link";

export default function StaffPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">직원 관리</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div key={id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-2">직원 {id}</h3>
            <p className="text-gray-600 mb-4">직원 정보...</p>
            <Link
              href={`/staff/${id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              상세 정보 보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

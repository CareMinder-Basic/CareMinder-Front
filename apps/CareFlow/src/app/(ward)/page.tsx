import Link from "next/link";
// import { Button } from "@careminder/cds";

export default function WardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">병동 관리</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 환자 카드 예시 */}
        {[1, 2, 3].map((id) => (
          <div key={id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-2">환자 {id}</h3>
            <p className="text-gray-600 mb-4">간단한 환자 정보...</p>
            {/* <Button
              buttontype={"primary"}
              width={"100px"}
              height={"30px"}
              fontSize={"14px"}
              borderRadius={"8px"}
            >
              상세 정보
            </Button> */}
            <Link
              href={`/patient/${id}`}
              className="text-blue-500 hover:text-blue-600 ml-2"
            >
              더 보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

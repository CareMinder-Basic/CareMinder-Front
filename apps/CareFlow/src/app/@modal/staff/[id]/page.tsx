"use client";

import Modal from "@/components/Modal";

export default function StaffModal({ params }: { params: { id: string } }) {
  return (
    <Modal title="직원 정보">
      <div>
        <p>직원 ID: {params.id}</p>
        {/* 직원 정보 내용 */}
      </div>
    </Modal>
  );
}

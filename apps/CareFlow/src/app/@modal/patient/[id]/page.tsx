'use client';

import Modal from '@/components/modal';

export default function PatientModal({ params }: { params: { id: string } }) {
  return (
    <Modal title="환자 정보">
      <div>
        <p>환자 ID: {params.id}</p>
        {/* 환자 정보 내용 */}
      </div>
    </Modal>
  );
}

'use client';

import Modal from '@/components/modal';
import { useState } from 'react';

export default function StaffLoginModal() {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log('Login attempt with:', { staffId, password });
  };

  return (
    <Modal title="스태프 로그인">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="staffId" className="text-gray-200">
            스태프 ID
          </label>
          <input
            id="staffId"
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="스태프 ID를 입력하세요"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-200">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          로그인
        </button>
      </form>
    </Modal>
  );
}

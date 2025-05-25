import React, { useState, useRef } from 'react'
import './ProfileSummary.scss'
import avt from 'src/assets/img/avt.png'
import { ChangeCameraAvatar } from 'src/assets/svg'

export default function ProfileSummary() {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          setAvatarImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-summary">
      <div className="avatar-container" onClick={() => fileInputRef.current?.click()}>
        <img src={avatarImage || avt} alt="User avatar" />
        <div className="camera-icon">
          <ChangeCameraAvatar width="24px" height="24px" />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          id="avatarInput"
          accept=".jpeg,.jpg,.png"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      <h2 className="user-name">Hiubdn</h2>
      <div className="user-role">Khách hàng</div>

      <div className="user-info">
        <div className="info-item">
          <div className="label">Ngày tham gia:</div>
          <div className="value">2024-04-12 15:11:03</div>
        </div>

        <div className="info-item">
          <div className="label">Số điện thoại:</div>
          <div className="value empty">Chưa cập nhật</div>
        </div>

        <div className="info-item">
          <div className="label">Số dư:</div>
          <div className="value">320 Coin</div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="primary">Nạp Coin</button>
        <button className="secondary">Lịch sử</button>
      </div>
    </div>
  )
}

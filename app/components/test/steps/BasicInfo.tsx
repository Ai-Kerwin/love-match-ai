'use client';
import { useState } from 'react';

interface BasicInfoProps {
  onNext: (data: any) => void;
}

export default function BasicInfo({ onNext }: BasicInfoProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    occupation: '',
    education: '',
    location: '',
    relationship: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ self: formData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          我的基本信息
        </h2>
        <p className="text-gray-500 text-center mb-8">
          请先填写您自己的信息，下一步将填写对方的信息
        </p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓名
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                年龄
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={e => setFormData(prev => ({ ...prev, age: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
                min="18"
                max="100"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                性别
              </label>
              <select
                value={formData.gender}
                onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              >
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                学历
              </label>
              <select
                value={formData.education}
                onChange={e => setFormData(prev => ({ ...prev, education: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              >
                <option value="">请选择</option>
                <option value="highschool">高中及以下</option>
                <option value="college">大专</option>
                <option value="bachelor">本科</option>
                <option value="master">硕士</option>
                <option value="phd">博士及以上</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                职业
              </label>
              <input
                type="text"
                value={formData.occupation}
                onChange={e => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                所在城市
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              感情状况
            </label>
            <select
              value={formData.relationship}
              onChange={e => setFormData(prev => ({ ...prev, relationship: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            >
              <option value="">请选择</option>
              <option value="single">单身</option>
              <option value="dating">正在恋爱</option>
              <option value="married">已婚</option>
              <option value="divorced">离异</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              兴趣爱好
            </label>
            <textarea
              value={formData.interests}
              onChange={e => setFormData(prev => ({ ...prev, interests: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={3}
              placeholder="请输入您的兴趣爱好，多个爱好用逗号分隔"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-foreground transition-colors duration-300"
        >
          下一步
        </button>
      </div>
    </form>
  );
}
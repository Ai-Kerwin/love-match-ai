'use client';
import { useState } from 'react';

interface PartnerExpectationProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function PartnerExpectation({ onNext, onBack }: PartnerExpectationProps) {
  const [formData, setFormData] = useState({
    ageRange: {
      min: '',
      max: ''
    },
    gender: '',
    education: '',
    location: '',
    occupation: '',
    relationship: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ expectation: formData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          期望的Ta
        </h2>
        <p className="text-gray-500 text-center mb-8">
          请描述您理想中的另一半
        </p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                期望年龄范围
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={formData.ageRange.min}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    ageRange: { ...prev.ageRange, min: e.target.value }
                  }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="最小年龄"
                  required
                  min="18"
                  max="100"
                />
                <span>至</span>
                <input
                  type="number"
                  value={formData.ageRange.max}
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    ageRange: { ...prev.ageRange, max: e.target.value }
                  }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="最大年龄"
                  required
                  min="18"
                  max="100"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                期望性别
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
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                期望学历
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                期望职业类型
              </label>
              <input
                type="text"
                value={formData.occupation}
                onChange={e => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="例如：教师、医生、工程师等"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              期望所在城市
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="例如：北京、上海等"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              期望感情状况
            </label>
            <select
              value={formData.relationship}
              onChange={e => setFormData(prev => ({ ...prev, relationship: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            >
              <option value="">请选择</option>
              <option value="single">单身</option>
              <option value="divorced">离异</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              期望的兴趣爱好
            </label>
            <textarea
              value={formData.interests}
              onChange={e => setFormData(prev => ({ ...prev, interests: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={3}
              placeholder="请输入您期望对方具有的兴趣爱好，多个爱好用逗号分隔"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          返回修改我的信息
        </button>
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
'use client';
import { useState } from 'react';

interface TestProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    selfQuestion: "你平时的作息时间是：",
    expectQuestion: "你希望另一半的作息时间是：",
    options: [
      { value: "early", text: "早睡早起" },
      { value: "late", text: "晚睡晚起" },
      { value: "irregular", text: "不固定" }
    ]
  },
  {
    id: 2,
    selfQuestion: "周末你通常会：",
    expectQuestion: "你希望另一半周末会：",
    options: [
      { value: "outdoor", text: "外出活动" },
      { value: "home", text: "在家休息" },
      { value: "social", text: "社交聚会" }
    ]
  },
  {
    id: 3,
    selfQuestion: "对于运动健身：",
    expectQuestion: "你希望另一半对运动健身：",
    options: [
      { value: "regular", text: "经常运动" },
      { value: "sometimes", text: "偶尔运动" },
      { value: "rarely", text: "很少运动" }
    ]
  },
  {
    id: 4,
    selfQuestion: "饮食习惯：",
    expectQuestion: "你希望另一半的饮食习惯：",
    options: [
      { value: "healthy", text: "注重健康" },
      { value: "tasty", text: "重视美味" },
      { value: "simple", text: "简单便利" }
    ]
  },
  {
    id: 5,
    selfQuestion: "对于旅行：",
    expectQuestion: "你希望另一半对旅行：",
    options: [
      { value: "often", text: "经常旅行" },
      { value: "planned", text: "有计划旅行" },
      { value: "seldom", text: "较少旅行" }
    ]
  }
];

export default function LifestyleTest({ onNext, onBack }: TestProps) {
  const [answers, setAnswers] = useState({
    self: {} as Record<number, string>,
    expect: {} as Record<number, string>
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ lifestyle: answers });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          生活方式测试
        </h2>
        <p className="text-gray-500 text-center mb-8">
          请分别选择符合你自己的选项，以及你期望伴侣的生活方式
        </p>

        {questions.map((q) => (
          <div key={q.id} className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">{q.selfQuestion}</h3>
              <div className="space-y-3">
                {q.options.map((option) => (
                  <label key={option.value} className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={`self-${q.id}`}
                      value={option.value}
                      onChange={(e) => setAnswers(prev => ({
                        ...prev,
                        self: { ...prev.self, [q.id]: e.target.value }
                      }))}
                      required
                      className="w-4 h-4 text-accent"
                    />
                    <span className="ml-3">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">{q.expectQuestion}</h3>
              <div className="space-y-3">
                {q.options.map((option) => (
                  <label key={option.value} className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={`expect-${q.id}`}
                      value={option.value}
                      onChange={(e) => setAnswers(prev => ({
                        ...prev,
                        expect: { ...prev.expect, [q.id]: e.target.value }
                      }))}
                      required
                      className="w-4 h-4 text-accent"
                    />
                    <span className="ml-3">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          上一步
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-foreground transition-colors duration-300"
        >
          查看结果
        </button>
      </div>
    </form>
  );
}
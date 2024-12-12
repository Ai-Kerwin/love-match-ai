'use client';
import { useState } from 'react';

interface TestProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    selfQuestion: "在社交场合，你通常是：",
    expectQuestion: "你希望另一半在社交场合是：",
    options: [
      { value: "E", text: "活跃外向，喜欢与人交谈" },
      { value: "I", text: "安静内敛，倾向独处" }
    ]
  },
  {
    id: 2,
    selfQuestion: "做决定时，你更倾向于：",
    expectQuestion: "你希望另一半做决定时：",
    options: [
      { value: "T", text: "理性分析，注重逻辑" },
      { value: "F", text: "感性直觉，重视感受" }
    ]
  },
  {
    id: 3,
    selfQuestion: "面对新环境时，你通常会：",
    expectQuestion: "你希望另一半面对新环境时：",
    options: [
      { value: "J", text: "提前计划，按部就班" },
      { value: "P", text: "随机应变，灵活处理" }
    ]
  },
  {
    id: 4,
    selfQuestion: "处理问题时，你更喜欢：",
    expectQuestion: "你希望另一半处理问题时：",
    options: [
      { value: "S", text: "关注细节和具体事实" },
      { value: "N", text: "关注整体和可能性" }
    ]
  }
];

export default function PersonalityTest({ onNext, onBack }: TestProps) {
  const [answers, setAnswers] = useState({
    self: {} as Record<number, string>,
    expect: {} as Record<number, string>
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ personality: answers });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          性格测试
        </h2>
        <p className="text-gray-500 text-center mb-8">
          请分别选择符合你自己的选项，以及你期望伴侣具有的特质
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
          下一步
        </button>
      </div>
    </form>
  );
}
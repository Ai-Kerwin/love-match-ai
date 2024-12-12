'use client';
import { useState } from 'react';

interface TestProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    selfQuestion: "你认为婚姻中最重要的是：",
    expectQuestion: "你希望另一半在婚姻中最看重：",
    options: [
      { value: "love", text: "感情基础" },
      { value: "responsibility", text: "责任担当" },
      { value: "growth", text: "共同成长" },
      { value: "family", text: "家庭责任" }
    ]
  },
  {
    id: 2,
    selfQuestion: "对于未来生活，你更看重：",
    expectQuestion: "你希望另一半对未来生活更看重：",
    options: [
      { value: "career", text: "事业发展" },
      { value: "family", text: "家庭生活" },
      { value: "balance", text: "工作与生活的平衡" },
      { value: "freedom", text: "个人自由" }
    ]
  },
  {
    id: 3,
    selfQuestion: "在理财方面，你的态度是：",
    expectQuestion: "你希望另一半在理财方面的态度是：",
    options: [
      { value: "save", text: "储蓄为主" },
      { value: "invest", text: "投资理财" },
      { value: "balance", text: "适度消费" },
      { value: "enjoy", text: "及时享受" }
    ]
  },
  {
    id: 4,
    selfQuestion: "对于孩子教育，你的观点是：",
    expectQuestion: "你希望另一半对孩子教育的观点是：",
    options: [
      { value: "strict", text: "严格要求" },
      { value: "freedom", text: "自由发展" },
      { value: "balance", text: "因材施教" },
      { value: "quality", text: "注重素质教育" }
    ]
  }
];

export default function ValuesTest({ onNext, onBack }: TestProps) {
  const [answers, setAnswers] = useState({
    self: {} as Record<number, string>,
    expect: {} as Record<number, string>
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ values: answers });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          价值观测试
        </h2>
        <p className="text-gray-500 text-center mb-8">
          请分别选择符合你自己的选项，以及你期望伴侣的价值观
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
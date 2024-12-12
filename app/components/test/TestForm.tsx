'use client';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import BasicInfo from './steps/BasicInfo';
import PartnerExpectation from './steps/PartnerExpectation';
import PersonalityTest from './steps/PersonalityTest';
import ValuesTest from './steps/ValuesTest';
import LifestyleTest from './steps/LifestyleTest';
import { useRouter } from 'next/navigation';
import { calculateMatch } from '../../utils/matchCalculator';

const steps = [
  { id: 'self-info', title: '我的信息' },
  { id: 'partner-expect', title: '期望的Ta' },
  { id: 'personality', title: '性格测试' },
  { id: 'values', title: '价值观' },
  { id: 'lifestyle', title: '生活方式' }
];

export default function TestForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    self: {},
    expectation: {},
    personality: {
      self: {},
      expect: {}
    },
    values: {
      self: {},
      expect: {}
    },
    lifestyle: {
      self: {},
      expect: {}
    }
  });

  const handleNext = (data: any) => {
    const newFormData = {
      ...formData,
      ...data
    };
    setFormData(newFormData);

    if (currentStep === steps.length - 1) {
      // 计算匹配度
      const result = calculateMatch(newFormData);
      // 将结果传递到结果页面
      router.push(`/result?score=${result.totalScore}&details=${JSON.stringify(result.details)}`);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="space-y-8">
      <ProgressBar steps={steps} currentStep={currentStep} />
      
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        {currentStep === 0 && (
          <BasicInfo onNext={handleNext} />
        )}
        {currentStep === 1 && (
          <PartnerExpectation 
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <PersonalityTest 
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <ValuesTest
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 4 && (
          <LifestyleTest
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
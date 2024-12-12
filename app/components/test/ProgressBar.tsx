interface Step {
    id: string;
    title: string;
  }
  
  interface ProgressBarProps {
    steps: Step[];
    currentStep: number;
  }
  
  export default function ProgressBar({ steps, currentStep }: ProgressBarProps) {
    return (
      <div className="relative">
        <div className="absolute top-4 w-full h-0.5 bg-gray-200">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-colors duration-300 ${
                  index <= currentStep
                    ? 'bg-accent text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
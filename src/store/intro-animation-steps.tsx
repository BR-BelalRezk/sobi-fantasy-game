import { createContext, useContext, useState } from "react";

type IntroAnimationStepsContextType = {
    introStep: 1 | 2 | 3 | 4;
    setIntroStep: (step: 1 | 2 | 3 | 4) => void;
}


const IntroAnimationStepsContext = createContext<IntroAnimationStepsContextType | null>(null)

type props = {
    children: React.ReactNode;
}

export const useIntroAnimationSteps = () => {
    const context = useContext(IntroAnimationStepsContext)
    if (!context) {
        throw new Error("useIntroAnimationSteps must be used within IntroAnimationStepsProvider")
    }
    return context
}
export default function IntroAnimationSteps({children}: props) {
  const [introStep, setIntroStep] = useState<1 | 2 | 3 | 4>(1);
  const value = {introStep , setIntroStep}

  return (
    <IntroAnimationStepsContext.Provider value={value}>
        {children}
    </IntroAnimationStepsContext.Provider>
  )
}
